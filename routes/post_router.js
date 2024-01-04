const express = require('express');
const postRouter = express.Router();

const postController = require('../controllers/post_controller');

postRouter.get('/', postController.getPosts);

postRouter.get('/:id', postController.getPost, postController.getPostDetail);

postRouter.post('/', postController.createPost);

postRouter.patch('/:id', postController.getPost, postController.updatePost);

postRouter.delete('/:id', postController.getPost, postController.deletePost);

module.exports = postRouter;
