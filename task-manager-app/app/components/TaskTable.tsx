import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../stores/taskStore';
import TaskRow from './TaskRow';

const TaskTable: React.FC = observer(() => {
  const { tasks, updateTaskStatus } = taskStore;

  const handleStatusChange = (taskId: number, newStatus: string) => {
    updateTaskStatus(taskId, newStatus);
  };

  return (
    <div className="overflow-fixed">
      <table className="table">
      <colgroup>
          <col className="w-1/5" /> {/* Set the width for the first column */}
          <col className="w-1/5" /> {/* Set the width for the second column */}
          <col className="w-1/5" /> {/* Set the width for the third column */}
        </colgroup>
        <thead>
          <tr className="text-lg">
            <th>Tasks</th>
            <th >Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TaskTable;
