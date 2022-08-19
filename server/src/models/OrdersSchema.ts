import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  items: [PizzaSchema],
});

export const OrderModel = mongoose.model("orders", OrderSchema);
