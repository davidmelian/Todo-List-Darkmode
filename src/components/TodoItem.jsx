import { Check } from "./icons/Check";
import { X } from "./icons/X";

export const TodoItem = ({ todo, removeTodo, handleComplete }) => {
  const { id, title, completed } = todo;
  return (
    <article className="dark:bg-gray-800 flex gap-4 border-b py-3 px-2">
      <button
        onClick={() => handleComplete(id)}
        className={`w-6 h-6 rounded-full border-2 px-1 ${
          completed &&
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        }`}
      >
        {completed ? <Check /> : ""}
      </button>
      <p
        className={`text-gray-900 grow dark:text-gray-300 ${
          completed && "line-through "
        }`}
      >
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <X />
      </button>
    </article>
  );
};
