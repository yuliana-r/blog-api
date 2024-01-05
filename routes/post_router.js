const express = require('express');
const postRouter = express.Router();

const postController = require('../controllers/post_controller');

postRouter.get('/', postController.getPosts);

postRouter.get('/:id', postController.getPostDetail);

postRouter.post('/', postController.createPost);

postRouter.patch('/:id', postController.updatePost);

postRouter.delete('/:id', postController.deletePost);

module.exports = postRouter;
