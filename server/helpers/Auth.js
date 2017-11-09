const jwt = require('jsonwebtoken')
require('dotenv').config()
const env = process.env.NODE_ENV || "development"
const Article = require('../models/Article')

const Login = (req,res,next) => {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.send(err)
        } else {
          req.headers = decoded
          next()
        }
    })
}

const Authen = (req,res,next) => {
    Article.find({
      _id: req.params.id
    })
    .then(article => {
      if (article[0].author == req.headers.id) {
        next()
      } else {
        res.send({message: 'Lu bukan yang bikin artikel'})
      }
    })
    .catch(err => res.send(err))
}

module.exports = {
    Login,
    Authen
}
