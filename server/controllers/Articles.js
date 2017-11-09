const Model = require('../models/Article')

class Articles {
  static postArticles (req,res) {
    Model.create({
      title     : req.body.title,
      content   : req.body.content,
      category  : req.body.category,
      author    : req.body.author
    })
    .then(newPost => res.status(200).send(newPost))
    .catch(error => {
      res.status(404).send(error);
    })
  }

  static getArticles (req,res) {
    Model.find({})
    .then(postQ => res.status(200).send(postQ))
    .catch(error => {
      console.log(error)
    })
  }

  static delArticles (req,res) {
    Model.remove({_id: req.params.id})
    .then(delPost => res.status(200).send(delPost))
    .catch(error => console.log(error))
  }

  static updArticles(req, res){
      Model.findByIdAndUpdate(req.params.id, {
          $set:{
            title     : req.body.title,
            content   : req.body.content,
            category  : req.body.category,
            author    : req.body.author
          }
      },{new: true})
      .then(updPost=>{
          res.status(200).send({updPost, message:'Updated Articles Berhasil!'})
      })
      .catch(err=>{
          res.status(400).send(err)
      })
  }
}

module.exports = Articles
