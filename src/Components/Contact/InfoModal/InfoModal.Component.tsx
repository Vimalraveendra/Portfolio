
import { IInfoModalProps } from "../../../Model/Portfolio.model";
import "./InfoModal.styles.css"

const InfoModalComponent:React.FC<IInfoModalProps> = ({ infoText, handleToggleInfoModal }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header"></div>
        <div className="modal-body">
          <p>{infoText}</p>
        </div>
        <span className="info-close" onClick={handleToggleInfoModal}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default InfoModalComponent;