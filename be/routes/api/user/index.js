var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const us = [
  {
    name: 'Justin',
    age: 14
  },
  {
    name: '민인혁',
    age: 39
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)
  res.send({users:us})
});
router.post('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success:true, msg:'post ok'});
});
router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success:true, msg:'put ok'});
});
router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success:true, msg:'delete ok'});
});
router.all('*', function(req, res, next) {
  next(createError(404, 'There is no shch API!'));
});

module.exports = router;