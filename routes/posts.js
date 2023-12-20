let express = require("express");
let postRouter = express.Router();

const postController = require("../controllers/postController");

/* GET request for posts list */
postRouter.get("/posts", postController.posts_list);

/* GET request for new post form */
postRouter.get("/posts/new", postController.new_post_form_get);

/* POST request to submit new post form */
postRouter.post("/posts/new", postController.new_post_form_post);

/* GET request for post detail */
postRouter.get("/posts/:id", postController.post_detail);

/* GET delete post form */
postRouter.get("/posts/:id/delete", postController.post_delete_get);

/* POST request to delete post */
postRouter.post("/posts/:id/delete", postController.post_delete_post);

/* GET update post form */
postRouter.get("/posts/:id/update", postController.post_update_get);

/* POST update post form */
postRouter.post("/posts/:id/update", postController.post_update_post);

module.exports = postRouter;
