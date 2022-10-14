import "./TodoCounter.css";

export const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <h1 className="todo-counter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
};
