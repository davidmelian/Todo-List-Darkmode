import { useState } from "react";
import { useTodos } from "./TodoProvider";

export const TodoFilter = ({ filter, changeFilter }) => {
  return (
    <section className="container  mx-auto mt-8">
      <div className="dark:bg-gray-800 flex justify-center gap-4 rounded bg-white py-3">
        <button
          onClick={() => changeFilter("all")}
          className={`${
            filter === "all"
              ? "text-blue-600 font-bold"
              : "text-gray-600 font-bold dark:text-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`${
            filter === "active"
              ? "text-blue-600 font-bold"
              : "text-gray-600 font-bold dark:text-gray-300"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${
            filter === "completed"
              ? "text-blue-600 font-bold"
              : "text-gray-600 font-bold dark:text-gray-300"
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};
