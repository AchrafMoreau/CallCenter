import express from 'express'
import { authantication } from '../MiddleWares/authMiddleWare.js'
import { operatorSearch, orderSearch } from '../Controllers/searchController.js'

const Route = express.Router()


Route.route("/order")
    .get(authantication, orderSearch)
export default Route