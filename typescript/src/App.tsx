import React from "react";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./todo.model";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const taskDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTask={todoAddHandler} />
      <TodoList items={todos} onDelete={taskDeleteHandler} />
    </div>
  );
};
