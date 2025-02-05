const todoModel = require("../Models/TodoModel");

const createTask = async (req,res)=> {
    const data = req.body;

    try {
        const model = new todoModel(data);
        await model.save();
        res.status(201).json({message: 'Task created successfully', success: true});
    }catch(err){
        res.status(500).json({message: 'Failed to create task', success: false});
    }
}


// to fetch all the tasks 
const fetchTask = async (req,res)=> {
    
    try {
        const data = await todoModel.find({});
        res.status(200)
        .json({message: 'All The tasks', success: true, data});
    }catch(err){
        res.status(500)
        .json({message: 'Failed to get all task', success: false});
    }
}

// to update all the tasks 
const modifyTaskById = async (req,res)=> {
    
    try {
        const id = req.params.id;
        const body = req.body;
        const object = { $set: { ...body } };
        await todoModel.findByIdAndUpdate(id, object);
        res.status(200)
        .json({message: 'Task get updated successfully', success: true});
    }catch(err){
        res.status(500)
        .json({message: 'Failed to update task', success: false});
    }
}

// to delete all the tasks 
const deleteTaskById = async (req,res)=> {
    
    try {
        const id = req.params.id;

         await todoModel.findByIdAndDelete(id);
        res.status(200)
        .json({message: 'Task is removed successfully', success: true});
    }catch(err){
        res.status(500)
        .json({message: 'Failed to remove task', success: false});
    }
}

module.exports = {
    createTask,
    fetchTask,
    modifyTaskById,
    deleteTaskById
}