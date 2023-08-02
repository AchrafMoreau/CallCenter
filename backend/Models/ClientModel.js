import mongoose from "mongoose"


// const MemebrsProjectSchema = mongoose.Schema({
//     _id:{
//         required: true,
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "user"
//     },
    
// })

const ProjectSchema = mongoose.Schema({
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
    },
    password:{
        required: [true, "this filed is required"],
        type: String
    },
    formLayout:{
        required: [true, "this filed is required"],
        type: String
    },
    project_memebers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    defualt_status:{
        required:true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    },
    close_status:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    }
},{
    timestamps:true
})

const Client = mongoose.model("client", ProjectSchema)
export { Client }