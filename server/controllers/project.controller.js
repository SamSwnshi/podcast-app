import Project from "../models/project.models.js";

export const createProject = async(req,res) =>{
    
    try {
        const {name} = req.body;

        if(!name){
            return req.status(400).json({message: "Project name is required!"})
        }
        const newProject = new Project({name});
        await newProject.save();

        return res.status(201).json({
            message: "Project created successfully", project: newProject
        })
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}