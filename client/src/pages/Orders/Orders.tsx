import { useState, useEffect } from "react";
import "./Orders.css";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

//Import components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Order from "../../components/Order/Order";
import { IOrder } from "../../helpers/interfaces/IOrder";

const Orders = () => {
  const { data: orders } = useQuery(["getAllOrders"], (): Promise<IOrder[]> => {
    return Axios.get("http://localhost:3001/orders/getAllOrders").then(
      (res) => res.data
    );
  });

  if (orders?.length === 0)
    return (
      <>
        <Navbar />
        <div className="ordersContainer">
          <div className="ordersBoxFalse">
            <p className="noOrdersText">THERE ARE NO ORDERS</p>
          </div>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="ordersContainer">
        <div className="ordersBox">
          {orders
            ?.filter((order: IOrder) => !order.completed)
            .map((orders: IOrder, key: number) => {
              return (
                <Order
                  key={key}
                  date={orders.date}
                  completed={orders.completed}
                  items={orders.items}
                />
              );
            })}
          {orders
            ?.filter((order: IOrder) => order.completed)
            .map((orders: IOrder, key: number) => {
              return (
                <Order
                  key={key}
                  date={orders.date}
                  completed={orders.completed}
                  items={orders.items}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
