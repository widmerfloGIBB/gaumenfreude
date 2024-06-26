let SupplierModel = require("../models/supplier");

let SupplierController = {
    find: async (req, res) => {
        let found = await SupplierModel.find({name: req.params.name});
        res.json(found);
    },
    all: async (req, res) => {
        let allSuppliers = await SupplierModel.find();
        res.json(allSuppliers);
    },
    create: async  (req, res) => {
        let newSupplier = new SupplierModel(req.query);
        let savedSupplier = await newSupplier.save();
        res.json(savedSupplier);
    },
    getAllProducts: async  (req, res) => {
        let foundProduct = await SupplierModel.find({name: req.params.name}).populate("products");
        res.json(foundProduct);
    },
    findById: async (req, res) => {
        let found = await SupplierModel.findById(req.params.id);
        res.json(found);
    },
    update: async (req, res) => {
        try {
            let updatedProduct = await SupplierModel.findByIdAndUpdate(req.params.id, req.query, { new: true });
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            let deletedProduct = await SupplierModel.findByIdAndDelete(req.params.id);
            res.json({ message: 'Product deleted', product: deletedProduct });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = SupplierController;