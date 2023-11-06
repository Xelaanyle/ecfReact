import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTaskStatus }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </ul>
  );
}

export default TaskList;
