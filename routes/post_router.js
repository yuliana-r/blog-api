let express = require('express');
let postRouter = express.Router();

const postController = require('../controllers/post_controller');

postRouter.get('/', postController.getPosts);

postRouter.get('/:id', postController.getPostDetail);

postRouter.post('/', postController.createPost);

postRouter.put('/:id', postController.updatePost);

postRouter.delete('/:id', postController.deletePost);

module.exports = postRouter;
