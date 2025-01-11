import { TodoCreateHeader } from "./components/TodoCreateHeader";

import { TodoList } from "./components/TodoList";
import { TodoClear } from "./components/TodoClear";
import { TodoFilter } from "./components/TodoFilter";
import { useState } from "react";
import { useTodos } from "./components/TodoProvider";

export default function App() {
  const { todos } = useTodos();
  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const filterTodo = () => {
    if (filter === "completed") return todos.filter((todo) => todo.completed);

    if (filter === "active") return todos.filter((todo) => !todo.completed);
    return todos;
  };
  return (
    <div className="bg-gray-200 min-h-screen min-w-full dark:bg-gray-900">
      <TodoCreateHeader />
      <div className="md:max-w-md mx-auto px-6">
        <main className="container mx-auto   ">
          <TodoList todos={filterTodo()} />
          <TodoClear />
        </main>

        <TodoFilter
          filter={filter}
          changeFilter={changeFilter}
        />
      </div>
    </div>
  );
}
