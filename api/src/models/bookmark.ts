const mongoose = require('mongoose')

export const BookmarkSchema = mongoose.Schema({
  modId: { type: String, required: true },
  userId: { type: String, required: true }
},{
  timestamps: true
})

const Bookmark = mongoose.model('bookmark', BookmarkSchema)

export default Bookmark