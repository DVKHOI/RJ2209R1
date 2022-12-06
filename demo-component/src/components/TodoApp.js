import React from "react";

const TodoApp = () => {
  const [work, setWork] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const handleAddTodo = (value) => {
    todos.push(value);
    setTodos(todos);
    setWork("");
  };
  return (
    <div className="mx-auto max-w-[500px] w-full">
      <h2 className="text-center">Todo List</h2>
      <div className="flex ">
        <input
          type="text"
          className="input"
          value={work}
          placeholder="Enter your work"
          onChange={(e) => setWork(e.target.value)}
        />
        <button
          className="bg-blue-400 rounded-lg"
          onClick={() => handleAddTodo(work)}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
