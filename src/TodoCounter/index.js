import React, { useContext } from "react";
import { TodoContext } from "../context";
import "./TodoCounter.css";

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h1 className="todo-counter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
};
