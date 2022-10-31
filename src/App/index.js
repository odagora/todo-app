import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { useTodos } from "./useTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import { EmptySearchResults } from "../EmptySearchResults";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

export const App = () => {
  const {
    dataStatus,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={dataStatus.loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        dataStatus={dataStatus}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={(error) => <TodosError error={error} />}
        onLoading={() =>
          Array(3)
            .fill(1)
            .map((_, i) => <TodosLoading key={i} />)
        }
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <EmptySearchResults searchText={searchText} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </>
  );
};
