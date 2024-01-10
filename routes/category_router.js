const express = require('express');
const categoryRouter = express.Router();

const categoryController = require('../controllers/category_controller');

categoryRouter.get('/', categoryController.getCategories);

categoryRouter.get('/:categoryID', categoryController.getCategoryDetail);

categoryRouter.post('/', categoryController.createCategory);

categoryRouter.patch('/:categoryID', categoryController.updateCategory);

categoryRouter.delete('/:categoryID', categoryController.deleteCategory);

module.exports = categoryRouter;
