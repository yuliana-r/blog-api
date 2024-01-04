const asyncHandler = require('express-async-handler');

exports.getCategories = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Categories list');
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Category create');
});

exports.getCategoryDetail = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Category detailsss');
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Category update');
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Category delete');
});
