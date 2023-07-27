import express from "express";
import { 
    Login,
    adminUpdateStaff,
    registerOperatoer,
    staffUpdate
} from "../Controllers/staffController.js";
import { AdminAuthantication, authantication } from "../MiddleWares/authMiddleWare.js";
const Route = express.Router()

Route.route("/login")
    .post(Login)
    
Route.route("admin/:id")
    .put(authantication, AdminAuthantication, adminUpdateStaff)
    // .get(authantication, getStaff)
    // .delete(authantication, AdminAuthantication, deleteStaff)

Route.route("/register")
    .post(registerOperatoer)


export default Route
