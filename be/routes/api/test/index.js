var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ msg: 'hello', a: '테스트 경로입니다.' })
});
router.all('*', function(req, res, next) {
  next(createError(404, 'API does not exist'))
});

module.exports = router;