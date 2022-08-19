import React, { useState } from "react";
import "./Card.css";

//import Components
import SizeModal from "../SizeModal/SizeModal";

interface Props {
  name: string;
  ingredients: string;
  image?: any;
  price: number;
}

const Card = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img alt="" src={props.image}></img>
      </div>
      <div className="cardTextContainer">
        <h3 className="cardTitle">{props.name}</h3>
        <div className="ingredientsContainer"></div>
        <p className="cardText">Ingredients: {props.ingredients}</p>
      </div>
      <div className="cardPriceContainer">
        <h5 className="cardPriceTitle">Price:</h5>
        <h5 className="cardPrice">${props.price}</h5>
      </div>
      <div className="cardButtonContainer">
        <button
          className="cardButton"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          CHOOSE SIZE
        </button>
      </div>

      {openModal && (
        <SizeModal setOpenModal={setOpenModal} price={props.price} />
      )}
    </div>
  );
};

export default Card;
