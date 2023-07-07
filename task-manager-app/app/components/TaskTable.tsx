"use client"

import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../stores/taskStore';
import TaskRow from './TaskRow';

const TaskTable: React.FC = observer(() => {
  const { tasks } = taskStore;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-lg">
            <th>Tasks</th>
            <th className="text-center">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TaskTable;
