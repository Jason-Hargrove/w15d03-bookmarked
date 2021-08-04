const {model, Schema} = require('mongoose');

const bookmarkSchema = new Schema({
  title: String,
  url: String
}, {
  timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema)
