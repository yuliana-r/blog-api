let express = require("express");
let commentRouter = express.Router();

const commentController = require("../controllers/commentController");

/* GET delete category form */
commentRouter.get("/comments/new", commentController.comment_create_get);

/* POST request to delete category */
commentRouter.post(
  "/comments/:id/delete",
  commentController.comment_create_post
);

/* GET delete category form */
commentRouter.get("/comments/:id/delete", commentController.comment_delete_get);

/* POST request to delete category */
commentRouter.post(
  "/comments/:id/delete",
  commentController.comment_delete_post
);

module.exports = commentRouter;
