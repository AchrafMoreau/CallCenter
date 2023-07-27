import express from 'express'
import cors from 'cors'
import dbConnection from './Config/dbConnection.js'
import dotenv from 'dotenv'
import StaffRoute from './Routes/staffRoute.js'
import { NotFound, errHandler } from './MiddleWares/errorMiddelWare.js'

// init application
dotenv.config()
const app = express() 

// middleWares 
app.use(cors())
app.use(express.json())
app.use("/api/staff", StaffRoute)


// Api
app.get("/", (req, res)=>{
    res.send("all good")
})

// listening
const PORT = process.env.PROT || 3015
app.listen(PORT, ()=> console.log(`we are open on the port ${PORT}...`))

// err middleWare 
app.use(NotFound)
app.use(errHandler)
dbConnection()