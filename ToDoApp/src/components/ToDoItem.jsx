import React, { useState } from 'react';
import "../App.css"

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className='todo-content' style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button className="edit-btn" onClick={handleEdit}>Save</button>
      ) : (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button  className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
