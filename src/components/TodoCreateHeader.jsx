import { useState } from "react";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";
import { useTodos } from "./TodoProvider";
import { useTheme } from "./ThemeProvider";
import * as Yup from "yup";

export const TodoCreateHeader = () => {
  const { dark, toggleTheme } = useTheme();
  const { createTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const todoSchema = Yup.string()
    .required("The title cannot be empty.")
    .min(3, "The title must be at least 3 characters long.")
    .max(15, "The title cannot exceed 15 characters.");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await todoSchema.validate(title);
      createTodo(title);
      setTitle("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <header className="  pt-10 container min-w-full bg-[url('./assets/images/bg-mobile-light.jpg')] bg-cover  dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <div className="md:max-w-md mx-auto flex justify-between">
        <h1 className="uppercase text-3xl font-bold pl-6 text-white tracking-[1em]">
          todo
        </h1>
        <button
          className="pr-6"
          onClick={toggleTheme}
        >
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:max-w-md mx-auto px-6 my-4 py-10"
      >
        <label
          htmlFor="todo-input"
          className="sr-only"
        >
          Create a new todo
        </label>
        <input
          id="todo-input"
          type="text"
          placeholder="Create a new todo"
          className="rounded w-full text-gray-500 py-4 outline-none px-2 dark:bg-gray-800"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
        />
        {error && <p className=" text-red-400">{error}</p>}
      </form>
    </header>
  );
};
