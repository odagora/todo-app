import React, { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ addTodo, setOpenModal }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo">Escribe tu nuevo TODO</label>
      <textarea
        name="todo"
        id="todo"
        cols="30"
        rows="10"
        placeholder="Agrega el texto del nuevo TODO"
        value={newTodo}
        onChange={onChange}
        required
      />
      <div className="button-container">
        <button
          className="button button--submit"
          type="submit"
          disabled={newTodo.length < 4}
        >
          Agregar
        </button>
        <button
          className="button button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
