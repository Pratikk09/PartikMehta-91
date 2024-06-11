const productModel = require("../models/productModel");

const productControlar = {
  async store(req, res, next) {
    let product;
    try {
      const { title, description, price, image } = req.body;
      product = await productModel.create({ title, description, price, image });
    } catch (error) {
      res.status(400).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(product);
  },
  async index(req, res, next) {
    let products;
    try {
      products = await productModel.find();
    } catch (error) {
      res.status(400).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(products);
  },
  async delete(req, res, next) {
    let product;
    try {
      const { id } = req.body;
      product = await productModel.findByIdAndDelete({ _id: id });
    } catch (error) {
      res.status(500).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(product);
  },
};
module.exports=productControlar;