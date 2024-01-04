const express = require('express');
const commentRouter = express.Router();

const commentController = require('../controllers/comment_controller');

commentRouter.post('/', commentController.createComment);

commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;
