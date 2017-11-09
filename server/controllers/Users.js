const mongoose = require('mongoose')
const User = require('../models/User')
var bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)
var jwt = require('jsonwebtoken');
require('dotenv').config()

function signUp (req, res) {
  var hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
      username: req.body.username,
      password: hash
  })
  .then(user => {
    console.log(user)
      res.send('New User added')
  })
  .catch(err => {
      res.send(err)
  })
}

function signIn (req, res) {
  User.findOne({
    username: req.body.username
  })
  .then(userData => {
    if (bcrypt.compareSync(req.body.password, userData.password)) {
        var token = jwt.sign({
            id: userData.id,
            username: userData.username
        }, process.env.JWT_SECRET)
        res.send(token)
    } else {
        res.send({
            status: 401,
            message: `Password Anda Salah`
        })
    }
  })
  .catch(err => {
      res.send('Username & Password Anda Salah')
  })
}

function Token (req, res) {
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.send(err)
    } else {
      console.log(decoded)
      res.send(decoded)
    }
  })
}

function getAllUser (req, res) {
  User.find({})
  .then(users => res.send(users))
  .catch(err => res.send(err))
}


module.exports = {
  signUp,
  signIn,
  getAllUser,
  Token
}
