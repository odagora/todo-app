import React from "react";
import "./TodoList.css";

export const TodoList = ({
  dataStatus,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) => {
  return (
    <section className="todo-list-container">
      {dataStatus.error && onError()}
      {dataStatus.loading && onLoading()}
      {!dataStatus.loading && !searchedTodos.length && onEmptyTodos()}
      <ul className="todo-list">{searchedTodos.map(render)}</ul>
    </section>
  );
};
