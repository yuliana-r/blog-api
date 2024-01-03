let express = require("express");
let categoryRouter = express.Router();

const categoryController = require("../controllers/categoryController");

categoryRouter.get("/categories", categoryController.category_list);

categoryRouter.post("/categories", categoryController.category_create);

categoryRouter.get("/categories/:id", categoryController.category_detail);

categoryRouter.put("/categories/:id", categoryController.category_update);

categoryRouter.delete("/categories/:id", categoryController.category_delete);

module.exports = categoryRouter;
