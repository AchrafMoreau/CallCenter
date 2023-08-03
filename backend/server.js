import express from 'express'
import cors from 'cors'
import dbConnection from './Config/dbConnection.js'
import dotenv from 'dotenv'
import StaffRoute from './Routes/staffRoute.js'
import { NotFound, errHandler } from './MiddleWares/errorMiddelWare.js'
import adminRoute from './Routes/adminRoute.js'
import OperatorRoute from './Routes/operatorRoute.js'
import ClientRoute from './Routes/projectRoute.js'
import SearchRoute from './Routes/searchRoute.js'
// init application
dotenv.config()
const app = express() 

// middleWares 
app.use(cors())
app.use(express.json())
app.use("/api/staff", StaffRoute)
app.use("/api/operator", OperatorRoute)
app.use("/api/client",ClientRoute)
app.use("/api/admin", adminRoute)
app.use("/api/search", SearchRoute)


// listening
const PORT = process.env.PROT || 3015
app.listen(PORT, ()=> console.log(`we are open on the port ${PORT}...`))

// err middleWare 
app.use(NotFound)
app.use(errHandler)


// db Connection 
dbConnection()