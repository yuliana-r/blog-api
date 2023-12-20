let express = require("express");
let userRouter = express.Router();

const userController = require("../controllers/userController");

/* GET user details */
userRouter.get("/users/:id", userController.user_detail);

/* GET delete user form */
userRouter.get("/users/:id/delete", userController.user_delete_get);

/* POST request to delete user */
userRouter.post("/users/:id/delete", userController.user_delete_post);

/* GET update user form */
userRouter.get("/users/:id/update", userController.user_update_get);

/* POST update user form */
userRouter.post("/users/:id/update", userController.user_update_post);

module.exports = userRouter;
