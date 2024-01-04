const express = require('express');
const categoryRouter = express.Router();

const categoryController = require('../controllers/category_controller');

categoryRouter.get('/', categoryController.getCategories);

categoryRouter.get('/:id', categoryController.getCategoryDetail);

categoryRouter.post('/', categoryController.createCategory);

categoryRouter.patch('/:id', categoryController.updateCategory);

categoryRouter.delete('/:id', categoryController.deleteCategory);

module.exports = categoryRouter;
