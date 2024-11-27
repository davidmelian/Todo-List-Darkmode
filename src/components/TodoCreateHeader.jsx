import { useEffect, useState } from "react";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

const initialtheme = localStorage.getItem("theme") === "dark";
export const TodoCreateHeader = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const [dark, setDark] = useState(initialtheme);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <header className="  pt-10 container mx-auto px-4 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-cover  dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <div className="md:max-w-md mx-auto flex justify-between">
        <h1 className="uppercase text-5xl font-bold text-white tracking-[1em]">
          todo
        </h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:max-w-md mx-auto my-4 py-10"
      >
        <input
          type="text"
          placeholder="Create a new todo"
          className="rounded w-full text-gray-500 py-4 outline-none px-2 dark:bg-gray-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </header>
  );
};
