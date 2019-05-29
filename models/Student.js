const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  schoolId: String,
  isHS: Boolean,
  isMS: Boolean,
  isES: Boolean,
  gradDate: Date
})


module.exports = mongoose.model('Student', Student);
