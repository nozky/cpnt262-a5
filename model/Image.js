const mongoose = require('mongoose')

// schema //represent the data to be pass to database
const imageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  path_url: String,
  link_url: String,
  credit: String,
  credit_url: String,
  comment_review: [
    {
      username: String,
      comment: String
    }
],
})

// convension when using model first Cap
// create a galleySchema, 
// compile and export
module.exports = Image = mongoose.model('Gallery',imageSchema)