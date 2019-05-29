const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Milestone = new Schema({
  _id: mongoose.Types.ObjectId,
  studentId: String,
  key: String,
  status: String,
  dueDate: Date
})


module.exports = mongoose.model('Milestone', Milestone);
