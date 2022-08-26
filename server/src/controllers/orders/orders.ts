import express, { Request, Response, NextFunction } from "express";

import {
  getAllOrdersDB,
  createOrderDB,
  updateOrderDB,
} from "../../service/orders/ordersDB";

export const getAllOrders = async (req: Request, res: Response) => {
  const orderList = await getAllOrdersDB();
  res.json(orderList);
};

export const createOrder = (req: Request, res: Response) => {
  const order = createOrderDB(req.body);

  res.json(order);
};

export const updateOrder = (req: Request, res: Response) => {
  const changes = updateOrderDB(req.body);

  res.json(changes);
};
