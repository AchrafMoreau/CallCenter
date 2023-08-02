import express from 'express'
import { authantication } from '../MiddleWares/authMiddleWare.js'
import { modifyOrdersStatus } from '../Controllers/operatorController.js'

const Route = express.Router()


Route.route("/modify/orderStatus/:id")
    .put(authantication, modifyOrdersStatus)

export default Route