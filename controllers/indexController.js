const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Index - get all posts");
});

exports.sign_up_form_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Sign up form GET");
});

exports.sign_up_form_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Sign up form POST");
});

exports.log_in_form_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Log in form GET");
});

exports.log_in_form_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Log in form POST");
});
