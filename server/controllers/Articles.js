var Article = require('../models/Article')

function getArticles (req,res) {
  Article.find({})
  .then(dataArticle => res.send('Data Berhasil didapat',dataArticle))
  .catch(error => console.log(error))
}

function postArticles (req,res) {
  Article.create({
    title     : req.body.title,
    content   : req.body.content,
    category  : req.body.category,
    author    : req.body.author
  })
  .then(newPost => res.status(200).send(newPost))
  .catch(error => res.status(404).send(error));
}

function deleteArticles (req,res) {

}

function updateArticles (req,res) {

}

module.exports = {
  getArticles,
  postArticles
}
