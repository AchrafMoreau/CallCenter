import mongoose from "mongoose";


const OrderSchema = mongoose.Schema({
    client_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "client",
    },
    customer_name:{
        type: String,
        required: true
    },
    customer_phone:{
        type: String,
        required: true
    },
    customer_email: String,
    city:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Products: [{
        type: String,
    }],
    qty:{
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
    status:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    }
},{
    timestamps: true
})

const Orders = mongoose.model("orders", OrderSchema)
export { Orders }