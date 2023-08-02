import dbConnection from "./Config/dbConnection.js"
import {Roles, User } from './Models/staffModel.js'
import { Client } from "./Models/ClientModel.js"
import { Status } from "./Models/orderStatusModel.js"
// import { User } from "./Models/orderStatusModel.js"

// import { Status } from "./data/orderStatusdb.js"
import { StatusData } from "./data/orderStatusdb.js"
import { RolesData } from "./data/rolesdb.js"
import { UserData } from "./data/staffdb.js"
import { ClientData } from "./data/client.js"
import { Orders } from "./Models/OrderModels.js"
import { OrdersData } from "./data/ordersData.js"

dbConnection()

const InsertData = async()=>{
    try{
        await Orders.deleteMany()
        await User.deleteMany()
        await Client.deleteMany()
        await Status.deleteMany()
        await Roles.deleteMany()

        const roles = await Roles.insertMany(RolesData)

        const usersWithThierRoles = UserData.map(predata=>({
            ...predata,
            role_id: roles[0]._id
        }))

        const status = await Status.insertMany(StatusData)
        const users = await User.insertMany(usersWithThierRoles)
        const projects = ClientData.map(prevData=>({
            ...prevData,
            project_memebers: [users[1]._id, users[0]._id,users[2]._id] ,
            defualt_status: status[0]._id ,
            close_status: status[2]._id,
        })) 


        await Client.insertMany(projects)
        await Orders.insertMany(OrdersData)



        console.log("inerting Status => All good ")
        process.exit()
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

const DeleteData = async()=>{
    try{
        await Staff.deleteMany()
        await Client.deleteMany()
        await Status.deleteMany()
        await Roles.deleteMany()

        console.log('Deleting Status => All good')
        process.exit(0)
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}
if(process.argv[2] === '-d'){
    DeleteData()
}else{
    InsertData()
}