import asyncHandler from 'express-async-handler'
import { Client } from '../Models/ClientModel.js'


const addingProject = asyncHandler( async(req, res)=>{
    const { 
        project_name,
        email,
        password,
        pack,
        formLayout,
        project_memebers,
        defualt_status,
        close_status
    } = req.body

    const addingProject = Client.create({
        project_name,
        email,
        password,
        pack,
        formLayout,
        project_memebers,
        defualt_status,
        close_status
    })

    if(addingProject){
        res.status(200).json({
            project_name,
            email,
            pack,
            formLayout,
            project_memebers,
            defualt_status,
            close_status
        })
    }else{
        res.status(400)
        throw new Error("No Project Was Added")
    }

})


const modifyProject = asyncHandler( async(req, res)=>{
    
    
    const project = await Client.findById(req.params.id)
    if(project){
        project.project_name = req.body.project_name || project.project_name
        project.email = req.body.email || project.email
        project.pack = req.body.pack || project.pack
        project.formLayout = req.body.formLayout || project.formLayout
        project.defualt_status = req.body.defualt_status || project.defualt_status
        project.close_status = req.body.close_status || project.close_status
        project.project_memebers = req.body.project_memebers || project.project_memebers
        project.password = req.body.password || project.password

        const updatedProject = await project.save()
        if(updatedProject){
            res.status(200).json({
                project_name: updatedProject.project_name,
                email: updatedProject.email,
                pack: updatedProject.pack,
                formLayout: updatedProject.formLayout,
                defualt_status: updatedProject.defualt_status,
                close_status: updatedProject.close_status,
                project_memebers: updatedProject.project_memebers,
            })
        }
    }else{
        res.status(400)
        throw new Error("Project Was Not Found !")
    }
})


const deleteProject = asyncHandler( async(req, res)=>{

    const project = await Client.findById(req.params.id)
    if(project){
        const deleted = await Client.deleteOne({ _id:req.params.id})
        if(project){
            res.status(200).json({
                message: "Project Was Deleted Successfully! "
            })
        }else{
            res.status(400)
            throw new Error("Project Was Not Found !!")
        }
    }else{
        res.status(400)
        throw new Error("Project Was Not Found")
    }
})
export { 
    addingProject,
    modifyProject,
    deleteProject,
}