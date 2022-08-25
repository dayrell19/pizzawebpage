import express, { Request, Response, NextFunction } from "express";

import { getAllOrdersDB, createOrderDB } from "../../service/orders/ordersDB";

export const getAllOrders = async (req: Request, res: Response) => {
  const orderList = await getAllOrdersDB();
  res.json(orderList);
};

export const createOrder = (req: Request, res: Response) => {
  const order = createOrderDB(req.body);

  res.json(order);
};
