import { TodoProvider } from "../context";
import { AppUI } from "./AppUI";

export const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};
