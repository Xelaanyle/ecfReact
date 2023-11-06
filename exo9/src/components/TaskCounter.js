import React from 'react';

function TaskCounter({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div>
      <p>Nombre de tâches totales : {totalTasks}</p>
      <p>Nombre de tâches complétées : {completedTasks}</p>
      <p>Nombre de tâches restantes : {remainingTasks}</p>
    </div>
  );
}

export default TaskCounter;
