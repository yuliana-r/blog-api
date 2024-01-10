const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// CREATE user

exports.signUp = asyncHandler(async (req, res, next) => {
  const userExists = await User.findOne({ username: req.body.username });

  if (userExists) {
    throw new Error('Username is already taken.');
  }

  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: hashedPassword,
      isAdmin: req.body.isAdmin,
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
});

// LOG IN user

exports.logIn = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  try {
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Incorrect username or password.' });
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res
        .status(401)
        .json({ message: 'Incorrect username or password.' });
    } else {
      return res.status(200).json({ message: 'Log in successful.' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
