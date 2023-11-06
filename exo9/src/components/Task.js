import React from 'react';

function Task({ task, deleteTask, toggleTaskStatus }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskStatus(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
}

export default Task;
