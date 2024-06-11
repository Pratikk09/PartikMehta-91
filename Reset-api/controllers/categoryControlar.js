const category = require("../models/categoryModel");

const categoryControlar = {
  async index(req, res, next) {
    let categories;
    try {
      categories = await category.find();
    } catch (error) {
      res.status(400).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(categories);
  },

  async delete(req, res, next) {
    let cat;
    try {
      const { id } = req.body;
      cat = await category.findByIdAndDelete({ _id: id });
    } catch (error) {
      res.status(500).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(cat);
  },
  async store(req, res, next) {
    let cat;
    try {
      const { title, description } = req.body;
      cat = await category.create({ title, description });
    } catch (error) {
      res.status(400).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(cat);
  },
};
module.exports = categoryControlar;
