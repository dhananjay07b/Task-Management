import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../stores/taskStore';
import TaskRow from './TaskRow';

const TaskTable: React.FC = observer(() => {
  const { tasks, updateTaskStatus, deleteTask } = taskStore;

  const handleStatusChange = (taskId: number, newStatus: string) => {
    updateTaskStatus(taskId, newStatus);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  const handleEditTask = (taskId: number) => {
    // Retrieve the task by ID
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      // Prompt the user to enter new values for title and description
      const newTitle = prompt('Enter a new title:', task.title);
      const newDescription = prompt('Enter a new description:', task.description);

      // Update the task with the new values
      if (newTitle !== null && newDescription !== null) {
        taskStore.editTask(taskId, newTitle, newDescription);
      }
    }
  };

  return (
    <div className="overflow-fixed">
      <table className="table">
        <colgroup>
          <col className="w-2/5" /> {/* Set the width for the first column */}
          <col className="w-2/5" /> {/* Set the width for the second column */}
          <col className="w-1/5" /> {/* Set the width for the third column */}
        </colgroup>
        <thead>
          <tr className="text-lg">
            <th>Tasks</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TaskTable;
