let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

let authRouter = require('./routes/auth');
let postsRouter = require('./routes/posts');
let usersRouter = require('./routes/users');
let categoriesRouter = require('./routes/category');
let commentsRouter = require('./routes/comment');

// Mongoose - MongoDB set up

dotenv.config();
mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`${process.env.MONGODB_URI}`);
}

// view engine setup
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter);
app.use('/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
