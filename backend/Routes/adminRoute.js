import express from "express"
import { authantication, AdminAuthantication } from "../MiddleWares/authMiddleWare.js"
import { 
    addingOperator, 
    addingOrders, 
    addingProject, 
    addingStatus, 
    deleteOperator, 
    deleteOrder, 
    deleteProject, 
    deleteStatus, 
    modifyOperator, 
    modifyOrders, 
    modifyProject, 
    modifyStatus, 
    viewAllOperator, 
    viewAllOrders, 
    viewAllProjects, 
    viewAllStatus, 
    viewOrder,
    viewStatus
} from "../Controllers/adminController.js"
const Route = express.Router()


// Everything Releated To Projects/Clinets
Route.route("/projects")
    .get(authantication, AdminAuthantication, viewAllProjects)
Route.route("/add/project")
    .post(authantication, AdminAuthantication, addingProject)
Route.route("/modify/project/:id")
    .put(authantication, AdminAuthantication, modifyProject)
Route.route("/delete/project/:id")
    .delete(authantication, AdminAuthantication, deleteProject)


// Everything Releated To Users/Operators
Route.route("/operator")
    .get(authantication, AdminAuthantication, viewAllOperator)
Route.route("/add/operator")
    .post(authantication, AdminAuthantication, addingOperator)
Route.route("/modify/operator/:id")
    .put(authantication, AdminAuthantication, modifyOperator)
Route.route("/delete/operator/:id")
    .delete(authantication, AdminAuthantication, deleteOperator)


// Everything Releated To Orders
Route.route("/orders")
    .get(authantication, AdminAuthantication, viewAllOrders)
Route.route("/order/:id")
    .get(authantication, AdminAuthantication, viewOrder)
Route.route("/add/orders")
    .post(authantication, AdminAuthantication, addingOrders)
Route.route("/modify/order/:id")
    .put(authantication, AdminAuthantication, modifyOrders)
Route.route("/delete/order/:id")
    .delete(authantication, AdminAuthantication, deleteOrder)


// Everything Related To OrderStatus
Route.route("/status")
    .get(authantication, AdminAuthantication, viewAllStatus)
Route.route("/status/:id")
    .get(authantication, AdminAuthantication, viewStatus)
Route.route("/add/status")
    .post(authantication, AdminAuthantication, addingStatus)
Route.route("/modify/status/:id")
    .put(authantication, AdminAuthantication, modifyStatus)
Route.route("/delete/status/:id")
    .delete(authantication, AdminAuthantication, deleteStatus)

export default Route