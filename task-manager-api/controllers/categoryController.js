const Category = require("../models/category");

exports.createCategory = async (req, res) => {
  try {
    const category = new Category({
      ...req.body,
      user: req.user._id,
    });
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user._id });
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
};