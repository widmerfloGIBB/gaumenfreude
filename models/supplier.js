const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SupplierSchema = new Schema({
    name: String,
    email: String,
    address: String,
    manager: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
})

module.exports = mongoose.model("Supplier", SupplierSchema)