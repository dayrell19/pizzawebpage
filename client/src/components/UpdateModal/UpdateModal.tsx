import "./UpdateModal.css";

//import Symbols
import CloseIcon from "@mui/icons-material/Close";

export interface Props {
  setUpdateModal: (state: boolean) => void;
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
        <div className="updateInfo"></div>
        <div className="updateSubmitButton">
          <button className="updateModalButton">UPDATE</button>
        </div>
      </div>
      <div className="updateModalBlur"></div>
    </div>
  );
};

export default UpdateModal;
