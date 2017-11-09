var Artikel = require('../models/Article')
const mongoose = require('mongoose')

function getArticles (req, res) {
  Artikel.find({})
  .then(article => res.send(article))
  .catch(err => res.send(err))
}

// function postArticles (req,res) {
//   Article.create({
//     title     : req.body.title,
//     content   : req.body.content,
//     category  : req.body.category,
//     author    : req.body.author
//   })
//   .then(newPost => res.status(200).send(newPost))
//   .catch(error => res.status(404).send(error));
// }

function postArticles (req, res) {
  Artikel.create({
    title:  req.body.title,
    content: req.body.content,
    category: req.body.category
    // author: req.headers.id
  })
  .then(function(articleData) {
    res.send(articleData)
  })
  .catch(function(err) {
    res.send(err)
  })
}
//
// function deleteArticles (req,res) {
//
// }
//
// function updateArticles (req,res) {
//
// }
module.exports = {
  getArticles,
  postArticles
  // pemecahToken
}
