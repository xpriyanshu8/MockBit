const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topic: {
    type: String,
    enum: ['DSA', 'OOP', 'Projects', 'HR', 'OS', 'DBMS'],
    required: true
  }
}, { timestamps: true });


const Session = mongoose.model('Session', SessionSchema);
module.exports = { Session };