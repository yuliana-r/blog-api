const asyncHandler = require('express-async-handler');
const Category = require('../models/Category');

// GET all categories

exports.getCategories = asyncHandler(async (req, res, next) => {
  const allCategories = await Category.find();
  res.json(allCategories);
});

// GET details for specific category

exports.getCategoryDetail = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.categoryID);
  if (!category) {
    return res.status(404).json({ message: 'Category does not exist.' });
  }
  res.status(200).json(category);
});

// CREATE new category

exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = new Category({
    name: req.body.name,
  });
  try {
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE category

exports.updateCategory = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.categoryID,
      req.body,
      {
        new: true,
      }
    );

    if (!category) {
      return res.status(404).json({ message: 'Category does not exist.' });
    }

    res.json({
      message: 'Category updated successfully.',
      updatedCategory: category,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE category

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.categoryID);

    if (!category) {
      return res.status(404).json({ message: 'Category does not exist.' });
    }

    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
