const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  question: { type: String, required: true },
  answer:   { type: String, required: true },
  aiFeedback: {
    clarity:       { type: String },
    structure:     { type: String },
    technicalDepth:{ type: String },
    suggestion:    { type: String }
  },
  rawFeedback: { type: String },
  score: { type: Number, default: 0 }
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = { Feedback };