import express from 'express'
import { authantication } from '../MiddleWares/authMiddleWare.js'
import { 
    addingOperator,
    addingOrders, 
    deleteOperator, 
    deleteOrder, 
    modifyOperator, 
    modifyOrders, 
    viewAllOperator, 
    viewAllOrders, 
    viewOrder,
} from '../Controllers/adminController.js'

const Route = express.Router()

Route.route("/add/order")
    .post(authantication, addingOrders)
Route.route("/modify/order/:id")
    .put(authantication, modifyOrders)
Route.route("/delete/order/:id")
    .delete(authantication, deleteOrder)
Route.route("/orders")
    .get(authantication, viewAllOrders)
Route.route("/order/:id")
    .get(authantication, viewOrder)

Route.route("/operator")
    .get(authantication, viewAllOperator)
Route.route("/add/operator")
    .post(authantication, addingOperator)
Route.route("/modify/operator/:id")
    .put(authantication, modifyOperator)
Route.route("/delete/operator/:id")
    .delete(authantication, deleteOperator)



export default Route