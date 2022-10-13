import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ text, completed, onComplete }) => {
  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${completed && "icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`'todo-item-p' ${completed && "todo-item-p--completed"}`}>
        {text}
      </p>
      <span className="icon icon-delete">X</span>
    </li>
  );
};
