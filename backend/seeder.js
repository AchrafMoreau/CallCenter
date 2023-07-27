import dbConnection from "./Config/dbConnection.js"
import {Roles, Staff} from './Models/staffModel.js'
import { Client } from "./Models/ClientModel.js"
import { Status } from "./Models/orderStatusModel.js"

import { OrderStatusData } from "./data/orderStatusdb.js"
import { RolesData } from "./data/rolesdb.js"
import { StaffData } from "./data/staffdb.js"
import { ClientData } from "./data/client.js"

dbConnection()

const InsertData = async()=>{
    try{
        await Staff.deleteMany()
        await Client.deleteMany()
        await Status.deleteMany()
        await Roles.deleteMany()

        await Staff.insertMany(StaffData)
        await Client.insertMany(ClientData)
        await Status.insertMany(OrderStatusData)
        await Roles.insertMany(RolesData)

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