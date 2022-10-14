import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../context";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export const AppUI = () => {
  const {
    dataStatus,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
