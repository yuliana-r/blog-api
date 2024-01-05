const express = require('express');
const postRouter = express.Router();

const postController = require('../controllers/post_controller');

postRouter.get('/', postController.getPosts);

postRouter.get('/:postID', postController.getPostDetail);

postRouter.post('/', postController.createPost);

postRouter.patch('/:postID', postController.updatePost);

postRouter.delete('/:postID', postController.deletePost);

module.exports = postRouter;
