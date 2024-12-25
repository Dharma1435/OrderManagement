const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 1 },
    totalAmount: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    finalAmount: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const ordersModel = mongoose.model("Order", orderSchema);

module.exports = { ordersModel };
