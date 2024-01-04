const asyncHandler = require('express-async-handler');

exports.getUserDetail = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: User detail');
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: User update');
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: User delete');
});
