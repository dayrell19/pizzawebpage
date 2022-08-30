import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
  ingredient: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },
});

const PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [IngredientSchema],
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
    default: false,
  },
  items: [PizzaSchema],
});

export const OrderModel = mongoose.model("orders", OrderSchema);
