import asyncHandler from 'express-async-handler'
import { Orders } from '../Models/OrderModels.js'


const addOrders = asyncHandler( async(req, res)=>{
    const created = await Orders.insertMany(req.body)
    
    if(created){
        res.status(200).json({
            message: "Orders Created Successfully"
        })
    }else{
        res.status(400)
        throw new Error("Order Was Not Created")
    }
})

const deleteOrder = asyncHandler( async(req, res)=>{
    const order = await Orders.findById(req.params.id)
    if(order){
        const deleted = await Orders.deleteOne({_id: req.params.id})
        if(deleted){
            res.status(200).json({
                message : "Order Was Deleted Successfully .."
            })

        }else{
            res.status(400)
            throw new Error("Failed At Deleing ")
        }
    }else{
        res.status(400)
        throw new Error("No Order Was Found")
    }
})

const modifyOrder = asyncHandler( async(req, res)=>{
    const order = await Orders.findById(req.params.id)
    if(order){
        order.customer_email = req.body.customer_email || order.customer_email
        order.customer_name = req.body.customer_name || order.customer_name
        order.city = req.body.city || order.city
        order.Address = req.body.Address || order.Address
        order.Products = req.body.Products || order.Products
        order.qty = req.body.qty || order.qty
        order.totalPrice = req.body.totalPrice || order.totalPrice
        order.customer_phone = req.body.customer_phone || order.customer_phone
        order.status = req.body.status || order.status

        const updatedorder = await order.save()
        if(updatedorder){
            res.status(200).json({
                customer_email: updatedorder.customer_email,
                customer_name: updatedorder.customer_name,
                city: updatedorder.city,
                Address: updatedorder.Address,
                Products: updatedorder.Products,
                totalPrice: updatedorder.totalPrice,
                qty: updatedorder.qty,
                status: updatedorder.status,
                customer_phone: updatedorder.customer_phone,
            })
        }else{
            res.status(400)
            throw new Error("Failed At Updating")
        }
    }else{
        res.status(400)
        throw new Error("Order Was Not Found !")
    }
})

