import { useState } from "react";
import { AppUI } from "./AppUI";

export const App = () => {
  const localStorageTodos = localStorage.getItem("TODO_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODO_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = !searchValue
    ? todos
    : todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
      });

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODO_V1", stringifiedTodos);
    setTodos(newTodos);
  };

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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
};
