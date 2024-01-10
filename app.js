const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

const authRouter = require('./routes/auth_router');
const postRouter = require('./routes/post_router');
const userRouter = require('./routes/user_router');
const categoryRouter = require('./routes/category_router');
const commentRouter = require('./routes/comment_router');

// Mongoose - MongoDB set up

dotenv.config();
mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`${process.env.MONGODB_URI}`);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS error handler
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }

  next();
});

app.use('/', authRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/categories', categoryRouter);
app.use('/comments', commentRouter);

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use((req, res, next) => {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end();
  }
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
