import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../context";

export const AppUI = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ dataStatus, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {dataStatus.error && <p>Upps!, ocurrió un error</p>}
            {dataStatus.loading && <p>Estamos cargando la información</p>}
            {!dataStatus.loading && !searchedTodos.length && (
              <p>Crea tu primer TODO</p>
            )}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
};
