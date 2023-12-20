let express = require("express");
let categoryRouter = express.Router();

const categoryController = require("../controllers/categoryController");

/* GET request for categories list */
categoryRouter.get("/categories", categoryController.category_list);

/* GET request for new category form */ //DETAIL???
categoryRouter.get("/categories/new", categoryController.new_category_form_get);

/* POST request to submit new category form */
categoryRouter.post(
  "/categories/new",
  categoryController.new_category_form_post
);

/* GET request for category detail */
categoryRouter.get("/categories/:id", categoryController.category_detail);

/* GET delete category form */
categoryRouter.get(
  "/categories/:id/delete",
  categoryController.category_delete_get
);

/* POST request to delete category */
categoryRouter.post(
  "/categories/:id/delete",
  categoryController.category_delete_post
);

/* GET update category form */
categoryRouter.get(
  "/categories/:id/update",
  categoryController.category_update_get
);

/* POST update category form */
categoryRouter.post(
  "/categories/:id/update",
  categoryController.category_update_post
);

module.exports = categoryRouter;
