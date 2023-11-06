import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
