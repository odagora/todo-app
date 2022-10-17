import React from "react";
import "./TodoList.css";

export const TodoList = ({
  dataStatus,
  searchedTodos,
  totalTodos,
  searchText,
  children,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
}) => {
  return (
    <section className="todo-list-container">
      {dataStatus.error && onError()}
      {dataStatus.loading && onLoading()}
      {!dataStatus.loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchText)}
      <ul className="todo-list">{searchedTodos.map(render || children)}</ul>
    </section>
  );
};
