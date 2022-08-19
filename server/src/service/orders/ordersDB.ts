import { OrderModel } from "../../models/OrdersSchema";

export const getAllOrdersDB = async () => {
  const getAllOrders = await OrderModel.find();
  return getAllOrders;
};
