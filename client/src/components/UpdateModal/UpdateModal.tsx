import "./UpdateModal.css";
import { useState, useEffect } from "react";
//import Symbols
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IIngredients,
  IOrder,
  IOrderPizza,
} from "../../helpers/interfaces/IOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Axios from "axios";

export interface Props {
  setUpdateModal: (state: boolean) => void;
  pizza: IOrderPizza;
  order: IOrder;
}

const UpdateModal = (props: Props) => {
  const [changes, setChanges] = useState<IOrder>(props.order);
  console.log(props.pizza);
  const { mutate } = useMutation((): Promise<any> => {
    return Axios.put("http://localhost:3001/orders/updateOrder", changes)
      .then((res) => res.data)
      .then(() => {
        props.setUpdateModal(false);
      });
  });

  const increment = (ingredient: IIngredients) => {
    const currPizza = changes.items.find(
      (item) => item.name === props.pizza.name
    ) as IOrderPizza;
    setChanges((prev) => ({
      ...prev,
      items: changes.items.map((item) => {
        if (item.name === currPizza.name)
          return {
            ...currPizza,
            ingredients: currPizza.ingredients.map((ings) => {
              if (ings.ingredient === ingredient.ingredient)
                return { ...ingredient, count: ings.count + 1 };

              return ings;
            }),

            price: currPizza.price + 1,
          };

        return item;
      }),
    }));
  };

  const decrement = (ingredient: IIngredients) => {
    const currPizza = changes.items.find(
      (item) => item.name === props.pizza.name
    ) as IOrderPizza;
    setChanges((prev) => ({
      ...prev,
      items: changes.items.map((item) => {
        if (item.name === currPizza.name)
          return {
            ...currPizza,
            ingredients: currPizza.ingredients.map((ings) => {
              if (ings.ingredient === ingredient.ingredient)
                return { ...ingredient, count: ings.count - 1 };

              return ings;
            }),

            price: currPizza.price - 1,
          };

        return item;
      }),
    }));
  };

  const saveChanges = () => {
    mutate();
  };

  return (
    <div className="updateContainer">
      <div className="updateInfoContainer">
        <div className="updateCloseButton">
          <CloseIcon
            className="updateCloseIcon"
            onClick={() => {
              props.setUpdateModal(false);
            }}
          />
        </div>
        <div className="updateInfo">
          <div className="updateInfoHeader">
            <div className="updatePizzaName">
              <p>
                {props.pizza.name}
                Pizza
              </p>
            </div>
          </div>
          <div className="updateInfoIngredients">
            {props.pizza.ingredients.map((ingredient: IIngredients) => (
              <div className="updateIngredients">
                <p className="ingredientName"> {ingredient.ingredient}: </p>
                <button
                  className="ingredientButton"
                  onClick={() => decrement(ingredient)}
                >
                  -
                </button>
                <p className="ingredientCountValue">
                  {
                    changes.items
                      .find((pizza) => pizza.name === props.pizza.name)
                      ?.ingredients.find(
                        (ing) => ing?.ingredient === ingredient.ingredient
                      )?.count
                  }
                </p>
                <button
                  className="ingredientButton"
                  onClick={() => increment(ingredient)}
                >
                  {" "}
                  +
                </button>
              </div>
            ))}
          </div>
          <div className="updateInfoSize">
            <button className="updateSizeSelection">Small</button>
            <button className="updateSizeSelection">Medium</button>
            <button className="updateSizeSelection">Large</button>
            <button className="updateSizeSelection">Extra Large</button>
          </div>
          <div className="updateInfoPrice">
            <p className="updatedPrice">
              Updated price: $
              {
                changes.items.find((item) => item.name === props.pizza.name)
                  ?.price
              }
            </p>
          </div>
        </div>
        <div className="updateSubmitButton">
          <button className="updateModalButton" onClick={saveChanges}>
            UPDATE
          </button>
        </div>
      </div>
      <div className="updateModalBlur"></div>
    </div>
  );
};

export default UpdateModal;
