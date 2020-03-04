const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const MentorSchema = new Schema({
    taskId : {
        type : String
    },
    mentorId :{
        type : String,
    },
    taskQuestion:{
        type: String,
    },
    isCompleted:{
        type: Boolean,
    },
    taskAnswer:{
        type: String,
    },
    date: {
        type : Date,
        default: Date.now
    }
})
module.exports = MentorTask = mongoose.model('MentorTask', MentorSchema);
