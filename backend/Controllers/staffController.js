import mongoose from "mongoose";
import asyncHandel from 'express-async-handler'
import { User } from "../Models/staffModel.js";
import { generateToken } from "../util/generateToken.js";

const Login = asyncHandel( async(req, res)=>{
    const { email , password} = req.body

    console.log(req.body)
    const user = await User.findOne({email})
    if(user && user.password === password){
        
        res.status(200).json({
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            role_id: user.role_id,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credential")
    }
})

const registerOperatoer = asyncHandel( async(req, res)=>{
    const { username, first_name, last_name, email, password, role_id, phone } = req.body

    const alreadyExist = await User.findOne({email})
    if(alreadyExist){
        res.status(400)
        throw new Error("User Already Exist")
    }

    const userCreation = await User.create({
        email,
        username,
        first_name,
        last_name,
        password,
        role_id,
        phone
    })

    if(userCreation){
        res.status(200).json({
            _id: userCreation._id,
            email: userCreation.email,
            username: userCreation.username,
            password:  userCreation.password
        })
    }else{
        res.status(400)
        throw new Error("Some data is Missing")
    }
})

const userUpdate = asyncHandel( async(req,res)=>{
    
    const user = await User.finndById(req.user._id)
    if(user){
        user.first_name = req.body.first_name || user.first_name
        user.last_name = req.body.last_name || user.last_name
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
        if(user.password){
            user.password = req.body.password || user.password
        }

        const updated = await user.save()

        if(updated){
            res.status(200).json({
                id: updated._id,
                username: updated.username,
                email: updated.email,
                password: updated.password,
                role_id: updated.role_id,
                token: generateToken(updated._id)
            })
        }else{
            res.status(400)
            throw new Error("user Not Found")
        }
    }

})

const adminUpdateuser = asyncHandel(async(req, res)=>{
    const user = await User.finndById(req.user._id)
    if(user){
        user.first_name = req.body.first_name || user.first_name
        user.last_name = req.body.last_name || user.last_name
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
        user.role_id = req.body.role_id || user.role_id
        if(user.password){
            user.password = req.body.password || user.password
        }

        const updated = await User.save()

        if(updated){
            res.status(200).json({
                id: updated._id,
                username: updated.username,
                email: updated.email,
                password: updated.password,
                role_id: updated.role_id,
                token: generateToken(updated._id)
            })
        }else{
            res.status(400)
            throw new Error("user Not Found")
        }
    }
})

export { 
    Login,
    registerOperatoer,
    userUpdate,
    adminUpdateuser,
}