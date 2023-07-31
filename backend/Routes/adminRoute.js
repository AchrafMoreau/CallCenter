import express from "express"
import { authantication, AdminAuthantication } from "../MiddleWares/authMiddleWare.js"
import { addingProject, deleteProject, modifyProject } from "../Controllers/adminController.js"
const Route = express.Router()



Route.route("/add/project")
    .post(authantication, AdminAuthantication, addingProject)

Route.route("/modify/project/:id")
    .put(authantication, AdminAuthantication, modifyProject)
Route.route("/delete/project/:id")
    .delete(authantication, AdminAuthantication, deleteProject)
    // .get(authantication, getStaff)
    // .delete(authantication, AdminAuthantication, deleteStaff)



export default Route