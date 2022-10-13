import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="create-todo-button" onClick={onClickButton}>
      +
    </button>
  );
};
