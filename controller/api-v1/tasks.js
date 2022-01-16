const task = require('../../models/tasks');

const getTasks = (req, res) => {
    task.find({}, (error, tasks) => {
        res.json({success: true, data: tasks});
    }).catch((error) => {
        res.status(404).json({success: false, msg: error.message});
    })
};

const getSingleTask = (req, res) => {
    res.send("Single task");
};

const createTask = (req, res) => {
    if (!req.body.name)
    {
        res.status(404).json({sucess: false, msg: "missing name value"});
        return;
    }

    task.create({name: req.body.name, completed: false}).then((task) => {
        res.json({success: true, task});
    }).catch((error) => {
        res.status(404).json({success: false, msg: error.message});
    });
};

const updateTask = (req, res) => {
    res.send("Update task");
};

const deleteTask = (req, res) => {
    task.deleteOne({_id: req.params.id}).then((result) => {
        res.json({success: true, deletedCount: result.deletedCount});
    }).catch((error) => {
        res.status(404).json({success: false, msg: error.message});
    })
};

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}