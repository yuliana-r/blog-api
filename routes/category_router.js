let express = require('express');
let categoryRouter = express.Router();

const categoryController = require('../controllers/category_controller');

categoryRouter.get('/', categoryController.getCategories);

categoryRouter.get('/:id', categoryController.getCategoryDetail);

categoryRouter.post('/', categoryController.createCategory);

categoryRouter.put('/:id', categoryController.updateCategory);

categoryRouter.delete('/:id', categoryController.deleteCategory);

module.exports = categoryRouter;
