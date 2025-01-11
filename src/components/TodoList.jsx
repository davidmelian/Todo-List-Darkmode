import { TodoItem } from "./TodoItem";
import { useTodos } from "./TodoProvider";

export const TodoList = ({ todos }) => {
  const { removeTodo, handleComplete } = useTodos();
  return (
    <div className=" bg-white mt-0 rounded-t-md overflow-hidden">
      {todos.length === 0 ? (
        <h1 className="text-center dark:bg-gray-800 dark:text-gray-300">
          No tasks added
        </h1>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            handleComplete={handleComplete}
          />
        ))
      )}
    </div>
  );
};
