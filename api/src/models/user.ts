const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  schoolStartDate: { type: Date, format: "YYYY-MM-DD" },
  schoolId: { type: String },
  courseId: { type: String },
  currentYear: {type: Number, min: 1, max: 8 }
},{
  timestamps: true,
  usePushEach: true
})

const User = mongoose.model('user', UserSchema)

export default User