let express = require('express');
let commentRouter = express.Router();

const commentController = require('../controllers/commentController');

commentRouter.post('/', commentController.createComment);

commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;
