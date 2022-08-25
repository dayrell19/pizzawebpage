import express from "express";
const router = express.Router();

import { getAllOrders, createOrder } from "../../controllers/orders/orders";

router.get("/getAllOrders", getAllOrders);

router.post("/", createOrder);

export { router as ordersRouter };
