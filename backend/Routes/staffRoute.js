import express from "express";
import { 
    Login,
    adminUpdateuser,
    registerOperatoer,
} from "../Controllers/staffController.js";
import { AdminAuthantication, authantication } from "../MiddleWares/authMiddleWare.js";
const Route = express.Router()

Route.route("/login")
    .post(Login)
    


Route.route("/register")
    .post(registerOperatoer)


export default Route
