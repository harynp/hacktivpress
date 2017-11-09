var express = require('express');
var router = express.Router();
var Art = require('../controllers/Articles')

/* GET users listing. */
router.get('/', Art.getArticles);
router.post('/', Art.postArticles);
router.delete('/', Art.delArticles);
router.put('/', Art.updArticles);

module.exports = router;
