let express = require("express");
let userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/users/:id", userController.user_detail);

userRouter.put("/users/:id", userController.user_update);

userRouter.delete("/users/:id", userController.user_delete);

module.exports = userRouter;
