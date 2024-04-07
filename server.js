const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

// Connect to db
mongoose.connect("mongodb://localhost:27017/gaumenfreude", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected");
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const SupplierControls = require("./controllers/supplier");
app.get("/suppliers", SupplierControls.all);
app.get("/suppliers/create", SupplierControls.create);
app.get("/suppliers/id/:id", SupplierControls.findById);
app.get("/suppliers/:name", SupplierControls.find);
app.get("/suppliers/:name/products", SupplierControls.getAllProducts);

const ProductControls = require("./controllers/product");
app.get("/products", ProductControls.all);
app.get("/products/create", ProductControls.create);
app.get("/products/id/:id", ProductControls.findById);
app.get("/products/:name", ProductControls.find);

// Start serv
app.listen(PORT);
