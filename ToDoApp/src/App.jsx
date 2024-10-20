import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTodo = (text) => {
    const newTodo = { id: nextId, text, completed: false };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1)
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
