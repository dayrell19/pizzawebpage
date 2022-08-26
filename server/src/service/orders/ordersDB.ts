import { OrderModel } from "../../models/OrdersSchema";
import { IOrder, IOrderPizza } from "../../types/IOrder";

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
    console.log("createOrderDB ERROR" + error);
    return error;
  }
};

export const updateOrderDB = async (body: IOrder) => {
  try {
    const order = await OrderModel.findById(body._id);
    if (order?.items) {
      order.items = body.items as any;
      await order?.save();
    }
  } catch (error) {
    console.log("updateOrderDB ERROR" + error);
    return error;
  }
};
