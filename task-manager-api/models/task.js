const mongoose = require ('mongoose');
const TaskSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    body:{
        type:String,
    },
    listItems:[{
        type:String,
    }],
    isShared:{
        type:Boolean,
        default:false,
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
modeule.exports= mongoose.model('Task', TaskSchema);