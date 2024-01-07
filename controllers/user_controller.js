const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// GET all users

exports.getUsers = asyncHandler(async (req, res, next) => {
  allUsers = await User.find();
  res.json(allUsers);
});

// GET details for one specific user

exports.getUserDetail = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userID);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist.' });
  }
  res.status(200).json(user);
});

// UPDATE user

exports.updateUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userID, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist.' });
    }

    res.json({ message: 'User updated successfully.', updatedUser: user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE user

exports.deleteUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userID);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist.' });
    }

    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
