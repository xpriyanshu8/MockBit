const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  sessionId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Session', 
    required: true 
  },
  question: { 
    type: String, 
    required: true 
  },
  answer: { 
    type: String, 
    required: true 
  },
  aiResponse: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  }
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = { Feedback };