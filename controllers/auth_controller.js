const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Index');
  // const allPosts = await Post.find(
  //   {},
  //   "title author timestamp imageURL commentsCount"
  // )
  //   .sort({ timestamp: -1 })
  //   .populate("author")
  //   .exec();

  // res.json({
  //   title: "Home",
  //   all_posts: allPosts,
  //   datefns: datefns,
  // });
});

exports.sign_up_form_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Sign up form GET');
});

exports.sign_up_form_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Sign up form POST');
});

exports.log_in_form_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Log in form GET');
});

exports.log_in_form_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Log in form POST');
});
