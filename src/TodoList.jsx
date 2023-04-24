import { TodoItems } from "./TodoItem";

export function Todolist({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && " No todos, yay! "}
      {todos.map((todo) => {
        return (
          <TodoItems
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
