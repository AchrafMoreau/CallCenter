import mongoose from "mongoose";
import dbConnection from "../Config/dbConnection.js";
import dotenv from 'dotenv'


dotenv.config()
dbConnection()


const RolesModel = mongoose.Schema({
    id: Number,
    role_name:{
        required: [true, "this filed is required"],
        type: String,
    },
    description:{
        type : String,
    }
},{
    timestamps: true
})
const StaffModel = mongoose.Schema({
    first_name: {
        required: true,
        type:String
    },
    last_name: String,
    username:{
        type:String,
        required: true
    },
    email:{
        required:true,
        type: String,
        unique: true
    },
    password:{
        required:true,
        type: String
    },
    phone:{
        type: String
    },
    role_id: {
        type: Number,
        required: true,
        ref: "roles"
    },
},{
    timestamps: true
})





const Staff = mongoose.model("staff", StaffModel) 
const Roles = mongoose.model("roles", RolesModel) 
 
export { Staff, Roles }