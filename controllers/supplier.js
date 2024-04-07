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
        let newSupplier = new SupplierModel(req.body);
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
    }
}

module.exports = SupplierController;