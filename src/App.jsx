import { useState } from "react";
import { TodoContainer } from "./components/TodoContainer/TodoContainer";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      task: trimmed,
      completed: false,
    };

    setTodo([newTask, ...todo]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };

  const updateTask = (id, newText) => {
    setTodo((prev) =>
      prev.map((t) => (t.id === id ? { ...t, task: newText.trim() } : t))
    );
  };

  const toggleCompleted = (id) => {
    setTodo((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <TodoContainer
      task={task}
      setTask={setTask}
      todo={todo}
      onAdd={addTask}
      onDelete={deleteTask}
      onUpdate={updateTask}
      onToggle={toggleCompleted}
    />
  );
}
export default App
