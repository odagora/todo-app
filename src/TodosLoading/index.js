import React from "react";
import "./TodosLoading.css";

export const TodosLoading = () => {
  return (
    <div className="loading-todo-container">
      <span className="loading-todo__complete-icon"></span>
      <p className="loading-todo__text">Cargando TODOs...</p>
      <span className="loading-todo__delete-icon"></span>
    </div>
  );
};
