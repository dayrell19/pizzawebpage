import { OrderModel } from "../../models/OrdersSchema";
import { IOrder } from "../../types/IOrder";

export const getAllOrdersDB = async () => {
  const getAllOrders = await OrderModel.find();
  return getAllOrders;
};

export const createOrderDB = async (body: IOrder) => {
  try {
    const newOrder = new OrderModel(body);
    await newOrder.save();
    console.log(newOrder);
    return newOrder;
  } catch (error) {
    console.log(error);
    return error;
  }
};
