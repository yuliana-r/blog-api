const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user_controller');

userRouter.get('/:id', userController.getUserDetail);

userRouter.patch('/:id', userController.updateUser);

userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
