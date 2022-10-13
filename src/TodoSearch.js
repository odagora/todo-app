import React, { useState } from "react";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        className="todo-search"
        placeholder="Escribe tu tarea aquí"
        value={search}
        onChange={handleInputChange}
      />
      <p>{search}</p>
    </>
  );
};
