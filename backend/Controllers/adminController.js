import asyncHandler from 'express-async-handler'
import { Client } from '../Models/ClientModel.js'
import { User } from '../Models/staffModel.js'
import { Orders } from '../Models/OrderModels.js'
import { Status } from '../Models/orderStatusModel.js'


// Everything Related To Projects/Client
const viewAllProjects = asyncHandler( async(req, res)=>{
    const projects = await Client.find({}).populate(["role_id", "defualt_status"])
    if(projects){
        res.status(200).json(projects)
    }else{
        res.status(400)
        throw new Error("No Project Was Found...! ")
    }
})
const addingProject = asyncHandler( async(req, res)=>{
    const { 
        project_name,
        email,
        password,
        pack,
        formLayout,
        project_memebers,
        defualt_status,
        close_status
    } = req.body

    const addingProject = Client.create({
        project_name,
        email,
        password,
        pack,
        formLayout,
        project_memebers,
        defualt_status,
        close_status
    })

    if(addingProject){
        res.status(200).json({
            project_name,
            email,
            pack,
            formLayout,
            project_memebers,
            defualt_status,
            close_status
        })
    }else{
        res.status(400)
        throw new Error("No Project Was Added")
    }

})
const modifyProject = asyncHandler( async(req, res)=>{
    
    
    const project = await Client.findById(req.params.id)
    if(project){
        project.project_name = req.body.project_name || project.project_name
        project.email = req.body.email || project.email
        project.pack = req.body.pack || project.pack
        project.formLayout = req.body.formLayout || project.formLayout
        project.defualt_status = req.body.defualt_status || project.defualt_status
        project.close_status = req.body.close_status || project.close_status
        project.project_memebers = req.body.project_memebers || project.project_memebers
        project.password = req.body.password || project.password

        const updatedProject = await project.save()
        if(updatedProject){
            res.status(200).json({
                project_name: updatedProject.project_name,
                email: updatedProject.email,
                pack: updatedProject.pack,
                formLayout: updatedProject.formLayout,
                defualt_status: updatedProject.defualt_status,
                close_status: updatedProject.close_status,
                project_memebers: updatedProject.project_memebers,
            })
        }
    }else{
        res.status(400)
        throw new Error("Project Was Not Found !")
    }
})
const deleteProject = asyncHandler( async(req, res)=>{

    const project = await Client.findById(req.params.id)
    if(project){
        const deleted = await Client.deleteOne({ _id:req.params.id})
        if(deleted){
            res.status(200).json({
                message: "Project Was Deleted Successfully! "
            })
        }else{
            res.status(400)
            throw new Error("Project Was Not Found !!")
        }
    }else{
        res.status(400)
        throw new Error("Project Was Not Found")
    }
})


// Everything Related To Operators
const addingOperator = asyncHandler( async(req, res)=>{
    const {
        first_name,
        last_name,
        email,
        username,
        password,
        imgProfile,
        status,
        role_id,
        operatorStatus
    } = req.body
    
    console.log(req.body)
    let createed = await User.create({
        first_name,
        last_name,
        email,
        username,
        password,
        imgProfile,
        status,
        role_id,
        operatorStatus,

    })

    if(createed){
        createed = await createed.populate(["role_id", "operatorStatus"])
        res.status(200).json(createed)
    }else{
        res.status(400)
        throw new Error("No User Was Created..!")
    }

})
const modifyOperator = asyncHandler( async(req, res)=>{
    const operator = await User.findById(req.params.id)
    if(operator){
        operator.first_name = req.body.first_name || operator.first_name
        operator.last_name = req.body.last_name || operator.last_name
        operator.email = req.body.email || operator.email
        operator.username = req.body.username || operator.username
        operator.imgProfile = req.body.imgProfile || operator.imgProfile
        operator.operatorStatus = req.body.operatorStatus || operator.operatorStatus
        operator.role_id = req.body.role_id || operator.role_id
        operator.password = req.body.password || operator.password
        operator.phone = req.body.phone || operator.phone
        operator.status = req.body.status || operator.status

        let updatedoperator = await operator.save()
        if(updatedoperator){
            updatedoperator = await updatedoperator.populate(["role_id", "operatorStatus"])
            res.status(200).json(updatedoperator)
        }
    }else{
        res.status(400)
        throw new Error("Project Was Not Found !")
    }
})
const deleteOperator = asyncHandler( async(req, res)=>{
    const operator = await User.findById(req.params.id)
    if(operator){
        const deleted = await User.deleteOne({_id:req.params.id})
        if(deleted){
            res.status(200).json({
                message: "User Was Deleted Successfully"
            })
        }else{
            res.status(400)
            throw new Error("User Was Not Found !")
        }
    }else{
        res.status(400)
        throw new Error("User Was Not Found !!")
    }
})
const viewAllOperator = asyncHandler( async(req, res)=>{
    const operators = await User.find({}).populate(["role_id", "operatorStatus"])
    if(operators){
        res.status(200).json(operators)
    }else{
        res.status(400)
        throw new Error("No User Was Found ...!")
    }
})


// Everything Related To Orders
const viewAllOrders = asyncHandler( async(req, res)=>{
    const orders = await Orders.find({}).populate(["client_id", "status"])
    if(orders){
        res.status(200).json(orders)
    }else{
        res.status(400)
        throw new Error("No Orders Was Found !")
    }
})
const viewOrder = asyncHandler( async(req, res)=>{
    const order = await Orders.findById(req.params.id).populate(["client_id", "status"])
    if(order){
        res.status(200).json(order)
    }else{
        res.status(400)
        throw new Error("No Order Was Found..!")
    }
})
const addingOrders = asyncHandler( async(req, res)=>{
    let data
    if(!Array.isArray(req.body)){
        data = [req.body]
    }
    let created = await Orders.insertMany(data)
    
    if(created){
        res.status(200).json({
            message: "Orders have been created successfully"
        })
    }else{
        res.status(400)
        throw new Error("Order Was Not Created")
    }

})
const modifyOrders = asyncHandler( async(req, res)=>{
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

        let updatedorder = await order.save()
        if(updatedorder){
            updatedorder = await updatedorder.populate(["client_id", "status"])
            res.status(200).json(updatedorder)
        }else{
            res.status(400)
            throw new Error("Failed At Updating")
        }
    }else{
        res.status(400)
        throw new Error("Order Was Not Found !")
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

// Everything Related To Status
const viewAllStatus = asyncHandler( async(req, res)=>{
    const status = await Status.find({}).populate(["role_id", "defualt_status"])
    if(status){
        res.status(200).json(status)
    }else{
        res.status(400)
        throw new Error("No Status Was Found !")
    }
})
const viewStatus = asyncHandler( async(req, res)=>{
    const status = await Status.findById(req.params.id).populate(["role_id", "defualt_status"])
    if(status){
        res.status(200).json(status)
    }else{
        res.status(400)
        throw new Error("No Status Was Found..!")
    }
})
const addingStatus = asyncHandler( async(req, res)=>{
    const {
        name,
        Max_appearence,
        description,
        justify,
        proriety,
        active,
        color,
        message,
        passOrderToNewOperator,
    } = req.body
    
    const created = await Status.create({
        name,
        Max_appearence,
        description,
        justify,
        proriety,
        active,
        color,
        message,
        passOrderToNewOperator,    
    })

    if(created){
        res.status(200).json(created)
    }else{
        res.status(400)
        throw new Error("Status Was Not Created")
    }

})
const modifyStatus = asyncHandler( async(req, res)=>{
    const status = await Status.findById(req.params.id)
    if(status){
        status.name = req.body.name || status.name
        status.description = req.body.description || status.description
        status.Max_appearence = req.body.Max_appearence || status.Max_appearence
        status.justify = req.body.justify || status.justify
        status.proriety = req.body.proriety || status.proriety
        status.active = req.body.active || status.active
        status.color = req.body.color || status.color
        status.message = req.body.message || status.message
        status.passOrderToNewOperator = req.body.passOrderToNewOperator || status.passOrderToNewOperator

        const updatedstatus = await status.save()
        if(updatedstatus){
            res.status(200).json({
                name: updatedstatus.name,
                description: updatedstatus.description,
                Max_appearence: updatedstatus.Max_appearence,
                justify: updatedstatus.justify,
                proriety: updatedstatus.proriety,
                color: updatedstatus.color,
                active: updatedstatus.active,
                message: updatedstatus.message,
                passOrderToNewOperator: updatedstatus.passOrderToNewOperator,
            })
        }else{
            res.status(400)
            throw new Error("Failed At Updating")
        }
    }else{
        res.status(400)
        throw new Error("Status Was Not Found !")
    }
})
const deleteStatus = asyncHandler( async(req, res)=>{
    const status = await Status.findById(req.params.id)
    if(status){
        const deleted = await Status.deleteOne({_id: req.params.id})
        if(deleted){
            res.status(200).json({
                message : "Status Was Deleted Successfully .."
            })

        }else{
            res.status(400)
            throw new Error("Failed At Deleing ")
        }
    }else{
        res.status(400)
        throw new Error("No Status Was Found")
    }
})

export { 
    viewAllProjects,
    addingProject,
    modifyProject,
    deleteProject,
    addingOperator,
    modifyOperator,
    deleteOperator,
    viewAllOperator,
    viewAllOrders,
    addingOrders,
    modifyOrders,
    deleteOrder,
    viewOrder,
    viewStatus,
    viewAllStatus,
    addingStatus,
    modifyStatus,
    deleteStatus,
}