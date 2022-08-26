import express from "express";
const router = express.Router();

import {
  getAllOrders,
  createOrder,
  updateOrder,
} from "../../controllers/orders/orders";

router.get("/getAllOrders", getAllOrders);

router.post("/", createOrder);

router.put("/updateOrder", updateOrder);

export { router as ordersRouter };
