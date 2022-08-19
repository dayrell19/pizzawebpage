import express, { Request, Response, NextFunction } from "express";

import { getAllOrdersDB } from "../../service/orders/ordersDB";

export const getAllOrders = async (req: Request, res: Response) => {
  const orderList = await getAllOrdersDB();
  // console.log(orderList);
  res.json(orderList);
};
