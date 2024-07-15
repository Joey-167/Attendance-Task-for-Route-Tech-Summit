const Task= require ("../../../../../../../../models/task");
exports.createTask= async(req,res)=>{
    try{
        const task= new Task({
            ...req.body,
            user:req.user._id,
        });
        await task.save();
        res.status(201).send(task);
    }catch(err){
        res.status(400).send(err);
    }
};
exports.getTasks= async(req,res)=>{
    try{
        const tasks= await Task.find({user: req.user._id});
        res.send(tasks);
    }catch(err){
        res.status(500).send(err);
    }
};

