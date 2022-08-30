import "./UpdateModal.css";

//import Symbols
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { IIngredients, IOrderPizza } from "../../helpers/interfaces/IOrder";

export interface Props {
  setUpdateModal: (state: boolean) => void;
  pizza: IOrderPizza;
}

const UpdateModal = (props: Props) => {
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
            <div className="updatePizzaName">Pesto Chicken Pizza</div>
            <DeleteIcon className="updateDeleteIcon" />
          </div>
          <div className="updateInfoIngredients">
            {/* <textarea className="updateIngredientsInput"></textarea> */}
            {props.pizza.ingredients.map((ingredient: IIngredients) => (
              <div>
                <p> {ingredient.ingredient} </p>
                <button> - </button> <input defaultValue={ingredient.count} />{" "}
                <button> +</button>{" "}
              </div>
            ))}
          </div>
          <div className="updateInfoSize">
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>Extra Large</button>
          </div>
          <div className="updateInfoPrice">Price: $17</div>
        </div>
        <div className="updateSubmitButton">
          <button className="updateModalButton">UPDATE</button>
        </div>
      </div>
      <div className="updateModalBlur"></div>
    </div>
  );
};

export default UpdateModal;
