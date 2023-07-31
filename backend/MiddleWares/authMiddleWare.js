import { Staff } from "../Models/staffModel.js"
import Jwt  from "jsonwebtoken"
import asyncHandler from "express-async-handler"


const authantication =  asyncHandler( async(req, res, next)=>{
    let Token

    if(req.headers.authorization && req.headers.authorization.startsWith("Token")){
        try{
            Token = req.headers.authorization.split(" ")[1]
            const subStract = await Jwt.verify(Token, process.env.JWT_SECRET)
            req.user = await Staff.findById(subStract._id).select('-password')
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
    if(req.headers.authorization && req.user.role_id === '1'){
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