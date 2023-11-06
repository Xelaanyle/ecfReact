import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Boire', completed: false },
    { id: 2, text: 'Manger', completed: false },
    { id: 3, text: 'Dormir', completed: true },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
      <TaskCounter tasks={tasks} />
    </div>
  );
}

export default App;
