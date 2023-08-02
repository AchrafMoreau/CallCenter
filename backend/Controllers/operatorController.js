import asyncHandlre from 'express-async-handler'
import { Orders } from '../Models/OrderModels.js'


const modifyOrdersStatus = asyncHandlre( async(req, res)=>{

    const order = await Orders.findById(req.params.id).populate(["client_id", "status"])

    if(order){
        order.status = new Object(req.body.status) || order.status
    }
    let updated = await order.save()

    if(updated){
        updated = await updated.populate(["status","client_id"])
        res.status(200).json(updated)
    }else{
        res.status(400)
        throw new Error("FAILED IN UPDATING")
    }
})

export {
    modifyOrdersStatus
}