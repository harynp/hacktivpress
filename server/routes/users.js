var express = require('express');
var router = express.Router();
var User = require('../controllers/Users')
// var Auth = require('../helpers/Auth')
/* GET users listing. */
router.get('/', User.getAllUser)
router.post('/signup', User.signUp);
router.post('/login', User.signIn);

module.exports = router;
