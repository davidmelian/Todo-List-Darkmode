import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const defaultTodos = [
    {
      id: 1,
      title: "workout",
      completed: false,
    },
    {
      id: 2,
      title: "walk the dog",
      completed: false,
    },
    {
      id: 3,
      title: "pick up groceries",
      completed: true,
    },
  ];
  const initialTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos && storedTodos.length > 0 ? storedTodos : defaultTodos;
  };

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        removeTodo,
        handleComplete,
        countTodos,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodos = () => useContext(TodoContext);
