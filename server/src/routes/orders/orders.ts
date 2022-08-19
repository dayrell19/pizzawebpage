import express from "express";
const router = express.Router();

import { getAllOrders } from "../../controllers/orders/orders";

router.get("/getAllOrders", getAllOrders);

export { router as ordersRouter };
