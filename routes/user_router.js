let express = require('express');
let userRouter = express.Router();

const userController = require('../controllers/user_controller');

userRouter.get('/:id', userController.getUserDetail);

userRouter.put('/:id', userController.updateUser);

userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
