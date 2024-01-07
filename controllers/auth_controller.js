const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signUp = asyncHandler(async (req, res, next) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    const user = new User({
      firstName: req.body.firstName,
      username: req.body.username,
      password: hashedPassword,
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
});

exports.logIn = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Log in');
});
