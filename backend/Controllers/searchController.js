import asyncHandler from 'express-async-handler'
import { User } from '../Models/staffModel.js'
import { Orders } from '../Models/OrderModels.js'

const operatorSearch = asyncHandler( async(req, res)=>{
    const keyword = req.query.keyword ? 
    {
        $or: [
            {first_name : { $regex : req.query.keyword, $options: 'i', }},
            {last_name : { $regex : req.query.keyword, $options: 'i', }},
            {username : { $regex : req.query.keyword, $options: 'i', }},
            {email : { $regex : req.query.keyword, $options: 'i', }},
        ]
    } : {}

    console.log(keyword)
    const operator = await User.find(keyword)
    if(operator){
        res.status(200).json(operator)
    }else{
        throw new Error("No Operator Was Found")
    }
})

const orderSearch = asyncHandler( async(req, res)=>{
    const {
        client_id,
        createdAt,
        customer_phone,
        customer_name,
        status,
    } = req.body

    let param = [{client_id}, {createdAt},{ customer_name}, {customer_phone}, {status}]
    
    param = param.filter(elm=> elm.client_id || elm.createdAt || elm.customer_name || elm.status || elm.customer_phone)
    
    let newObj = {}

    param.map(elm=> {
        if(elm.customer_name || elm.customer_phone){
            newObj[Object.keys(elm)] =  {
                $regex : Object.values(elm).join(""),
                $options: 'i'
            }  
        }else {
            newObj[Object.keys(elm)] = Object.values(elm).join("")
        }
    })
    const order = await Orders.find({
        $and: [newObj]
    }).populate(["status", "client_id"])

    if(order){
        res.status(200).json(order)
    }else{
        res.status(400)
        throw new Error("No Order Was Found..!")
    }
})

export {
    operatorSearch,
    orderSearch,
}
