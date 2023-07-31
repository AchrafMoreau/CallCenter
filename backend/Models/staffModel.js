import mongoose from "mongoose";
import dbConnection from "../Config/dbConnection.js";
import dotenv from 'dotenv'


dotenv.config()
dbConnection()


const RolesSchema = mongoose.Schema({
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
const UserSchema = mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "roles"
    },
},{
    timestamps: true
})





const User = mongoose.model("user", UserSchema) 
const Roles = mongoose.model("roles", RolesSchema) 
 
export { User, Roles }