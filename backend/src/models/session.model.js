const mongoose = require("mongoose");

const SessionSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    topic: { 
    type: String, 
    required: true, 
    trim: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });


const Session = mongoose.model('Session', SessionSchema);
module.exports = { Session };