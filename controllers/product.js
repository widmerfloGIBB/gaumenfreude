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
        let newProduct = new ProductModel(req.query);
        let savedProduct = await newProduct.save();
        res.json(savedProduct);
    },
    findById: async (req, res) => {
        let found = await ProductModel.findById(req.params.id);
        res.json(found);
    },
    update: async (req, res) => {
        try {
            let updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.query, { new: true });
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            let deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
            res.json({ message: 'Product deleted', product: deletedProduct });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ProductController;