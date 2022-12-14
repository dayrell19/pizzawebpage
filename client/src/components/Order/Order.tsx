import "./Order.css";
import { useState } from "react";

import {
  IIngredients,
  IOrder,
  IOrderPizza,
} from "../../helpers/interfaces/IOrder";
import UpdateModal from "../UpdateModal/UpdateModal";
import { pizzas } from "../../storage/pizzaMenu";

export interface Props {
  date: string;
  completed: boolean;
  items: any;
  order: IOrder;
}

const Order = (props: Props) => {
  const [updateModal, setUpdateModal] = useState<boolean>(false);

  const openUpdate = () => {
    setUpdateModal(true);
  };
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
      {props.items.map((pizza: any, key: number) => {
        let ingredients = pizza.ingredients.map((element: IIngredients) => {
          return element.ingredient;
        });
        return (
          <>
            <div className="orderItems">
              <div className="orderInfo">
                <div className="orderPizzaName">{pizza.name}</div>
                <div className="orderPizzaIngredients">
                  Ingredients: {ingredients.join(", ")}
                </div>
                <div className="orderBottom">
                  <div className="orderPizzaSize">Size: {pizza.size}</div>
                  <div className="orderPizzaPrice">Price: ${pizza.price}</div>
                </div>
              </div>
              <div className="orderButton">
                {props.completed == false && (
                  <button className="updateButton" onClick={openUpdate}>
                    Change Pizza
                  </button>
                )}
              </div>
            </div>
            {updateModal && (
              <UpdateModal
                setUpdateModal={setUpdateModal}
                pizza={pizza}
                order={props.order}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Order;
