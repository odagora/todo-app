import "./TodoCounter.css";

export const TodoCounter = ({ completedTodos, totalTodos, loading }) => {
  return (
    <h1 className={`todo-counter ${loading && "todo-counter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
};
