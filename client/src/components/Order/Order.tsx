import "./Order.css";

import { IOrderPizza } from "../../helpers/interfaces/IOrder";

export interface Props {
  date: string;
  completed: boolean;
  items: any;
}

const Order = (props: Props) => {
  return (
    <div className="orderContainer">
      <div className="orderHeader">
        <div className="orderDate">ORDER DATE: {props.date}</div>
        <div className="orderCompletion">
          {props.completed ? (
            <div className="orderCompleted">COMPLETED</div>
          ) : (
            <div className="orderIncompleted">INCOMPLETED</div>
          )}
        </div>
      </div>
      {props.items.map((pizza: IOrderPizza, key: number) => {
        return (
          <div className="orderItems">
            <div className="orderInfo">
              <div className="orderPizzaName">{pizza.name}</div>
              <div className="orderPizzaIngredients">{pizza.ingredients}</div>
              <div className="orderBottom">
                <div className="orderPizzaSize">Size: {pizza.size}</div>
                <div className="orderPizzaPrice">Price: ${pizza.price}</div>
              </div>
            </div>
            <div className="orderButton">
              {props.completed == false && (
                <button className="updateButton">Change Pizza</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
