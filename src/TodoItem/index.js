import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="todo-item">
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`'todo-item-p' ${completed && "todo-item-p--completed"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
};
