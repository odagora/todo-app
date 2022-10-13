import React from "react";

export const TodoItem = (props) => {
  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
};
