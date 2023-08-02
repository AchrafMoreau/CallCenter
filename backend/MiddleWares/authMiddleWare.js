<<<<<<< HEAD
import { Staff } from "../Models/staffModel.js"
=======
import { Roles, User } from "../Models/staffModel.js"
>>>>>>> commit
import Jwt  from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import { Status } from "../Models/orderStatusModel.js"


let Token
let Substract
const authantication =  asyncHandler( async(req, res, next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            Token = req.headers.authorization.split(" ")[1]
            Substract = Jwt.verify(Token, process.env.JWT_SECRET)
            try{
                req.user = await User.findById(Substract.id).select("-password");
            }catch(err){
                console.log(err)
            }
            next()
        }catch(err){
            res.status(400)
            throw new Error("Not Authorized")
        }
    }else{
        res.status(400)
        throw new Error("No Token Was Found")
    }
})

const AdminAuthantication = asyncHandler( async(req, res, next)=>{

    const role = await Roles.findById(req.user.role_id)
    // try{
    //     const role = await User.findOne({_id:Substract.id}).populate({
    //         path: 'status',
    //         select: "name"
    //     })
    //     console.log(role)
    // }catch(err){
    //     console.log(err)
    // }
    console.log(role.role_name)
    if(req.headers.authorization && role.role_name === 'Admin'){
        next()
    }else{
        res.status(400)
        throw new Error("No authroiezed as an Admin")
    }
})

export {
    authantication,
    AdminAuthantication,
}