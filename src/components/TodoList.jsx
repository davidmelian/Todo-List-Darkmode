import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, removeTodo, handleComplete }) => {
  return (
    <div className=" bg-white mt-0 rounded-t-md overflow-hidden">
      {todos.length === 0 ? (
        <h1 className="text-center">No tasks added</h1>
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
