const asyncHandler = require("express-async-handler");

exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Categories list");
});

exports.category_create = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category create");
});

exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category detailsss");
});

exports.category_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update");
});

exports.category_delete = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category delete");
});
