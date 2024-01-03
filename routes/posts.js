let express = require("express");
let postRouter = express.Router();

const postController = require("../controllers/postController");

postRouter.get("/posts", postController.posts_list);

postRouter.get("/posts/:id", postController.post_detail);

postRouter.post("/posts", postController.post_create);

postRouter.put("/posts/:id", postController.post_update);

postRouter.delete("/posts/:id", postController.post_delete);

module.exports = postRouter;
