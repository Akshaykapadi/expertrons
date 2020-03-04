const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const MentorSchema = new Schema({
    mentorId : {
        type : String
    },
    name :{
        type : String,
    },
    email :{
        type : String
    },
    phoneNum:{
        type: String
    },
    addr:{
        type : String
    },
    date: {
        type : Date,
        default: Date.now
    }
})
module.exports = Mentor = mongoose.model('Mentor', MentorSchema);
