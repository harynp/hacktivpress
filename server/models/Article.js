var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
,ObjectId = Schema.ObjectId;

var ArticleSchema = new Schema ({
  title     : {type: String,required: true},
  content   : {type: String, required: true},
  category  : {type: String, required: true},
  author    : {type: Schema.ObjectId,ref: 'User'},
})

var Article = mongoose.model('Article', ArticleSchema);

module.export = Article
