import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import "../App.css"

const ToDoList = ({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');
 
  const handleAddTodo = () => {
    
    if (newTodoText.trim() !== '') {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        className="new-todo-input"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
