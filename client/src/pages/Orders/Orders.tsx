import { useState, useEffect } from "react";
import "./Orders.css";
import Axios from "axios";

//Import components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Order from "../../components/Order/Order";
import { IOrder } from "../../helpers/interfaces/IOrder";

const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/orders/getAllOrders").then((response) => {
      setOrders(response.data);
    });
  }, [orders]);
  return (
    <>
      <Navbar />
      <div className="ordersContainer">
        <div className={orders.length !== 0 ? "ordersBox" : "ordersBoxFalse"}>
          {orders.length !== 0 ? (
            orders.map((orders: IOrder, key: number) => {
              return (
                <Order
                  key={key}
                  date={orders.date}
                  completed={orders.completed}
                  items={orders.items}
                />
              );
            })
          ) : (
            <p className="noOrdersText">THERE ARE NO ORDERS</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
