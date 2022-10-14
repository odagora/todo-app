import "./TodoSearch.css";

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputReset = (event) => {
    event.keyCode === 27 && setSearchValue("");
  };

  return (
    <>
      <input
        className="todo-search"
        placeholder="Escribe tu tarea aquí"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleInputReset}
      />
    </>
  );
};
