import React, { useState } from "react";
import "./SizeModal.css";

//import Symbols
import CloseIcon from "@mui/icons-material/Close";

export interface Props {
  setOpenModal: (state: boolean) => void;
  price: number;
}

const SizeModal = (props: Props) => {
  const [small, setSmall] = useState<boolean>(false);
  const [medium, setMedium] = useState<boolean>(false);
  const [large, setLarge] = useState<boolean>(false);
  const [xlarge, setXLarge] = useState<boolean>(false);

  const handleSelection = (size: string) => {
    switch (size) {
      case "small":
        setSmall(!small);
        setMedium(false);
        setLarge(false);
        setXLarge(false);
        console.log(small, medium, large, xlarge);
        break;
      case "medium":
        setMedium(!medium);
        setSmall(false);
        setLarge(false);
        setXLarge(false);
        console.log(small, medium, large, xlarge);
        break;
      case "large":
        setLarge(!large);
        setMedium(false);
        setSmall(false);
        setXLarge(false);
        console.log(small, medium, large, xlarge);
        break;
      case "xlarge":
        setXLarge(!xlarge);
        setMedium(false);
        setLarge(false);
        setSmall(false);
        console.log(small, medium, large, xlarge);
        break;
      default:
        setSmall(false);
        setMedium(false);
        setLarge(false);
        setXLarge(false);
    }
  };

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
            className={small ? "sizeSelected" : "sizeSelection"}
            onClick={() => {
              handleSelection("small");
            }}
          >
            Small: ${props.price - 2}
          </button>
          <button
            className={medium ? "sizeSelected" : "sizeSelection"}
            onClick={() => {
              handleSelection("medium");
            }}
          >
            Medium: ${props.price}
          </button>
          <button
            className={large ? "sizeSelected" : "sizeSelection"}
            onClick={() => {
              handleSelection("large");
            }}
          >
            Large: ${props.price + 3}
          </button>
          <button
            className={xlarge ? "sizeSelected" : "sizeSelection"}
            onClick={() => {
              handleSelection("xlarge");
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
