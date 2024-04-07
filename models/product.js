const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    amount: Number,
    supplier: {
        type: Schema.Types.ObjectId,
        ref: "Supplier"
    }
})

module.exports = mongoose.model("Product", ProductSchema);