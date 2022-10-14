import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../context";
import "./Modal.css";

export const Modal = ({ children }) => {
  const { setOpenModal } = useContext(TodoContext);

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
