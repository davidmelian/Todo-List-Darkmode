import { TodoCreateHeader } from "./components/TodoCreateHeader";

import { TodoList } from "./components/TodoList";
import { TodoClear } from "./components/TodoClear";
import { TodoFilter } from "./components/TodoFilter";
import { useEffect, useState } from "react";

// const initialTodos = [
//   {
//     id: 1,
//     title: "workout",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "walk the dog",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "pick up groceries",
//     completed: true,
//   },
// ];
const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "default":
        return todos;
    }
  };

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const countTodos = todos.filter((todo) => !todo.completed).length;
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="bg-gray-200 min-h-screen dark:bg-gray-900">
      <TodoCreateHeader createTodo={createTodo} />
      <div className="md:max-w-md mx-auto">
        <main className="container mx-auto  ">
          <TodoList
            todos={filterTodo()}
            removeTodo={removeTodo}
            handleComplete={handleComplete}
          />
          <TodoClear
            countTodos={countTodos}
            clearCompleted={clearCompleted}
          />
        </main>

        <TodoFilter
          changeFilter={changeFilter}
          filter={filter}
        />
      </div>
    </div>
  );
}
