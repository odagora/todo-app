import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    dataStatus,
  } = useLocalStorage("TODO_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = !searchValue
    ? todos
    : todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
      });

  const completeTodo = (text) => {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, completed: true } : todo
    );
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        dataStatus,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
