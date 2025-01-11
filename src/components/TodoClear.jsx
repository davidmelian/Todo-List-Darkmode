import { useTodos } from "./TodoProvider";

export const TodoClear = () => {
  const { countTodos, clearCompleted } = useTodos();
  return (
    <section className="dark:bg-gray-800 flex justify-between bg-white px-3 py-3 rounded-b-md">
      <span className="text-gray-500 dark:text-gray-300">
        {countTodos} items left
      </span>
      <button
        onClick={clearCompleted}
        className="text-gray-500 dark:text-gray-300"
      >
        Clear completed
      </button>
    </section>
  );
};
