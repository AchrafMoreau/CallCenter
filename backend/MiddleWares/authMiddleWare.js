import { Staff } from "../Models/staffModel"
import Jwt  from "jsonwebtoken"
import asyncHandler from "express-async-handler"


const authantication =  asyncHandler( async(req, res, next)=>{
    let Token

    if(req.headers.authantication && req.headers.authantication.startwith("Token")){
        try{
            Token = req.headers.authantication.split(" ")[1]
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
    if(req.headers.authantication && req.user.role_id === '1'){
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