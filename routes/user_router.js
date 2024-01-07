const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user_controller');

userRouter.get('/', userController.getUsers);

userRouter.get('/:userID', userController.getUserDetail);

userRouter.patch('/:userID', userController.updateUser);

userRouter.delete('/:userID', userController.deleteUser);

module.exports = userRouter;
