const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ArticleSchema = new Schema ({
  title     : {type: String,required: true},
  content   : {type: String, required: true},
  category  : {type: String, required: true},
  author    : {type: Schema.ObjectId,ref: 'User'},
})

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article
