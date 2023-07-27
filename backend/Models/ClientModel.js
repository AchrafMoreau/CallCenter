import mongoose from "mongoose"


const MemebrsProject = mongoose.Schema({
    staff:{
        required: true,
        type: Number,
        // it has to be type objectId and red to staff tabel
    }
})

const ClientModel = mongoose.Schema({
    project_name:{
        required: [true, "this filed is required"],
        type: String
    },
    email:{
        required: [true, "this filed is required"],
        type: String
    },
    pack:{
        required:true,
        type: Number, 
        // it has to be a type objectId and ref to pack table 
    },
    password:{
        required: [true, "this filed is required"],
        type: String
    },
    formLayout:{
        required: [true, "this filed is required"],
        type: String
    },
    project_memebers: [MemebrsProject],
    defualt_status:{
        required:true,
        type: Number,
        // it has to be a type objectId and red to Status table
    },
    close_status:{
        required: true,
        type: Number,
        // it has to be a type objectId and red to Status table
    }
},{
    timestamps:true
})

const Client = mongoose.model("client", ClientModel)
export { Client }