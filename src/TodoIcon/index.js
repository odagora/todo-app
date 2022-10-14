import React from "react";
import { ReactComponent as CheckIcon } from "./check.svg";
import { ReactComponent as DeleteIcon } from "./delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <CheckIcon className="icon-svg icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <DeleteIcon className="icon-svg icon-svg--delete" fill={color} />
  ),
};

export const TodoIcon = ({ type, color = "gray", onClick }) => {
  return (
    <span
      className={`icon-container icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};
