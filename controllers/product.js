let ProductModel = require("../models/product");

let ProductController = {
    find: async (req, res) => {
        let found = await ProductModel.find({name: req.params.name});
        res.json(found);
    },
    all: async (req, res) => {
        let allProducts = await ProductModel.find();
        res.json(allProducts);
    },
    create: async (req, res) => {
        let newProduct = new ProductModel(req.body);
        let savedProduct = await newProduct.save();
        res.json(savedProduct);
    },
    findById: async (req, res) => {
        let found = await ProductModel.findById(req.params.id);
        res.json(found);
    }
}

module.exports = ProductController;