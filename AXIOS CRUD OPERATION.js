//AXIOS CRUD OPERATION

import axios from "axios";
import React, { useEffect, useState } from "react";
export default function App() {
  const [todos, settodos] = useState([]);
  const [formtodo, setformtodo] = useState({ title: "", completed: false });
  const [editing, setediting] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  const Fecthtodos = async () => {
    const response = await axios.get(API_URL);
    settodos(response.data);
  };
  const updatetodo = async (id) => {
    const response = await axios.put(
      `${API_URL}/${id}`,
      formtodo.completed === true
        ? { title: formtodo.title, completed: false }
        : { title: formtodo.title, completed: true }
    );
    settodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    setediting(false);
    setformtodo({ title: "", completed: false });
  };
  const posttodo = async () => {
    const response = await axios.post(API_URL, formtodo);
    settodos([...todos, response.data]);
    setformtodo({ title: "", completed: false });
  };
  const startUpdate = (todo) => {
    setediting(todo);
    setformtodo(todo);
  };
  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    settodos(todos.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    Fecthtodos();
  }, []);
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editing ? updatetodo(editing.id) : posttodo();
        }}
      >
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formtodo.title}
            onChange={(e) =>
              setformtodo({ ...formtodo, title: e.target.value })
            }
          />
          <input
            type="checkbox"
            value={formtodo.completed}
            name="completed"
            onChange={(e) =>
              setformtodo({ ...formtodo, completed: e.target.checked })
            }
          />
          <button>{editing ? "Edit" : "Add"}</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <input type="checkbox" checked={todo.completed} />
                {todo.completed.toString()}
              </td>
              <td>
                <button onClick={() => startUpdate(todo)}>Update</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}