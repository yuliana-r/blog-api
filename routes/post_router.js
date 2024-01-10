const express = require('express');
const postRouter = express.Router();

const postController = require('../controllers/post_controller');
const commentsController = require('../controllers/comment_controller');

postRouter.get('/', postController.getPosts);

postRouter.get('/:postID', postController.getPostDetail);

postRouter.post('/', postController.createPost);

postRouter.patch('/:postID', postController.updatePost);

postRouter.delete('/:postID', postController.deletePost);

// Handle post comments

postRouter.get('/:postID/comments', commentsController.getComments);

postRouter.post('/:postID/comments', commentsController.createComment);

module.exports = postRouter;
