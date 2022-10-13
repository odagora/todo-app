import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { id: 1, text: "Estudiar Reactjs", completed: false },
  { id: 2, text: "Planchar la ropa", completed: false },
  { id: 3, text: "Enviar información del proyecto", completed: false },
];

export const App = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
