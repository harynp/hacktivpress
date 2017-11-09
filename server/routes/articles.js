var express = require('express');
var router = express.Router();
var Article = require('../controllers/Articles')

/* GET users listing. */
router.get('/', Article.getArticles)
router.post('/', Article.postArticles);

module.exports = router;
