let express = require("express");
let commentRouter = express.Router();

const commentController = require("../controllers/commentController");

commentRouter.post("/comments", commentController.comment_create);

commentRouter.delete("/comments/:id", commentController.comment_delete);

module.exports = commentRouter;
