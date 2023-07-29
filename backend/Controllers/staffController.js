import mongoose from "mongoose";
import asyncHandel from 'express-async-handler'
import { Staff } from "../Models/staffModel.js";
import { generateToken } from "../util/generateToken.js";

const Login = asyncHandel( async(req, res)=>{
    const { email , password} = req.body

    console.log(email, password)
    const staff = await Staff.findOne({email})
    if(staff && staff.password === password){
        
        res.status(200).json({
            first_name: staff.first_name,
            last_name: staff.last_name,
            username: staff.username,
            email: staff.email,
            role_id: staff.role_id,
            token: generateToken(staff._id),
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credential")
    }
})

const registerOperatoer = asyncHandel( async(req, res)=>{
    const { username, first_name, last_name, email, password, role_id, phone } = req.body

    const alreadyExist = await Staff.findOne({email})
    if(alreadyExist){
        res.status(400)
        throw new Error("User Already Exist")
    }

    const staffCreation = await Staff.create({
        email,
        username,
        first_name,
        last_name,
        password,
        role_id,
        phone
    })

    if(staffCreation){
        res.status(200).json({
            _id: staffCreation._id,
            email: staffCreation.email,
            username: staffCreation.username,
            password:  staffCreation.password
        })
    }else{
        res.status(400)
        throw new Error("Some data is Missing")
    }
})

const staffUpdate = asyncHandel( async(req,res)=>{
    
    const staff = await Staff.finndById(req.user._id)
    if(staff){
        staff.first_name = req.body.first_name || staff.first_name
        staff.last_name = req.body.last_name || staff.last_name
        staff.username = req.body.username || staff.username
        staff.email = req.body.email || staff.email
        staff.phone = req.body.phone || staff.phone
        if(staff.password){
            staff.password = req.body.password || staff.password
        }

        const updated = await staff.save()

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
            throw new Error("Staff Not Found")
        }
    }

})

const adminUpdateStaff = asyncHandel(async(req, res)=>{
    const staff = await Staff.finndById(req.user._id)
    if(staff){
        staff.first_name = req.body.first_name || staff.first_name
        staff.last_name = req.body.last_name || staff.last_name
        staff.username = req.body.username || staff.username
        staff.email = req.body.email || staff.email
        staff.phone = req.body.phone || staff.phone
        staff.role_id = req.body.role_id || staff.role_id
        if(staff.password){
            staff.password = req.body.password || staff.password
        }

        const updated = await staff.save()

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
            throw new Error("Staff Not Found")
        }
    }
})

export { 
    Login,
    registerOperatoer,
    staffUpdate,
    adminUpdateStaff,
}