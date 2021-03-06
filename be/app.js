var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const history = require('connect-history-api-fallback')
const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}
app.use('/api', require('./routes/api'));
// app.use(history());
app.use(express.static(path.join(__dirname, '../fe', 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.send({msg:err.message})
});

const mongoose = require('mongoose')
const User = require('./models/users')
// console.log(User);

console.log(`${process.env.NODE_ENV} started!`)

const cfg = require('../config')
console.log(cfg)

mongoose.connect(cfg.dbUrl, {useNewUrlParser: true}, (err) => {
  if(err) {
    return console.error(err)
  }
  console.log('mongoose connected!');
})
// User.deleteMany()
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

// User.create({name: '하하'})
//   .then(r => console.log(r))
//   .catch(e => console.error(e))
// User.find()
//   .then(r => console.log(r))
//   .catch(e => console.error(e));
// User.updateOne({_id: '5d0701c30bdd0c0a4c1ff742'}, {$set: {age: 34}})
//   .then(r => {
  //     console.log(r)
  //     console.log('updated')
  //     return User.find()
  //   })
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e));
  // User.deleteOne({name:'하하'})
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e));
  
  module.exports = app;