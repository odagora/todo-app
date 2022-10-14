import ReactDOM from "react-dom";
import "./Modal.css";

export const Modal = ({ children, setOpenModal }) => {
  const handleClick = (event) => {
    event.target.className === "modal-background" && setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <div className="modal-background" onClick={handleClick}>
      {children}
    </div>,
    document.getElementById("modal")
  );
};
