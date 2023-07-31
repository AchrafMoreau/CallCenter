import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    discprition: String
})
const OrderSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Product:[ProductSchema],
    Price:{
        type: Number,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    status:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    }
})

export { OrderSchema , ProductSchema }  