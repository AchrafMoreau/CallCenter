import mongoose from "mongoose"

const OrderStatusModel = mongoose.Schema({
    id: Number,
    name:{
        type: String,
        required: [true, "this filed is required"]
    },
    Max_appearence:{
        type: Number,
        required: [true, "this filed is required"]
    },
    description:{
        type: String,
    },
    justify:{
        type: Boolean,
        required: [true, "this filed is required"]
    },
    proriety:{
        type: Number,
        required: [true, "this filed is required"]
    },
    active:{
        type: Boolean,
        required: [true, "this filed is required"]
    },
    color:{
        type: String,
    },
    message:{
        type: String,
        required: [true, "this filed is required"]
    },
    passOrderToNewOperator:{
        type: Number,
        required: [true, "this filed is required"]
    },
    
},{
    timestamps: true
})


const Status = mongoose.model("status", OrderStatusModel)
export { Status }