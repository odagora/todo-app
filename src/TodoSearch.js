import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="todo-search"
        placeholder="Escribe tu tarea aquí"
        value={searchValue}
        onChange={handleInputChange}
      />
      <p>{searchValue}</p>
    </>
  );
};
