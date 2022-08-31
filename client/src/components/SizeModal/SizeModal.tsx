import React, { useState } from "react";
import "./SizeModal.css";
import { PizzaSizes } from "./models";

//import Symbols
import CloseIcon from "@mui/icons-material/Close";

export interface Props {
  setOpenModal: (state: boolean) => void;
  price: number;
}

const SizeModal = (props: Props) => {
  const [pizzaSize, setPizzaSize] = useState<PizzaSizes>(PizzaSizes.Medium);

  const addCart = () => {
    props.setOpenModal(false);
  };
  return (
    <div className="sizeContainer">
      <div className="selectSizeContainer">
        <div className="sizeCloseButton">
          <CloseIcon
            className="sizeCloseIcon"
            onClick={() => {
              props.setOpenModal(false);
            }}
          />
        </div>
        <div className="sizeContentContainer">
          <h3 className="sizeTitle">Select the size of your pizza below:</h3>
          <button
            className={
              pizzaSize === PizzaSizes.Small ? "sizeSelected" : "sizeSelection"
            }
            onClick={() => {
              setPizzaSize(PizzaSizes.Small);
            }}
          >
            Small: ${props.price - 2}
          </button>
          <button
            className={
              pizzaSize === PizzaSizes.Medium ? "sizeSelected" : "sizeSelection"
            }
            onClick={() => {
              setPizzaSize(PizzaSizes.Medium);
            }}
          >
            Medium: ${props.price}
          </button>
          <button
            className={
              pizzaSize === PizzaSizes.Large ? "sizeSelected" : "sizeSelection"
            }
            onClick={() => {
              setPizzaSize(PizzaSizes.Large);
            }}
          >
            Large: ${props.price + 3}
          </button>
          <button
            className={
              pizzaSize === PizzaSizes.ExtraLarge
                ? "sizeSelected"
                : "sizeSelection"
            }
            onClick={() => {
              setPizzaSize(PizzaSizes.ExtraLarge);
            }}
          >
            Extra Large: ${props.price + 4.5}
          </button>
        </div>
        <div className="sizeButtonContainer">
          <button className="sizeButton" onClick={addCart}>
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="sizeModalBlur"></div>
    </div>
  );
};

export default SizeModal;
