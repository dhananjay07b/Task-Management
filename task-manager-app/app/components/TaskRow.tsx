// TaskRow.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';

interface TaskRowProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
  handleStatusChange: (taskId: number, newStatus: string) => void;
}

const TaskRow: React.FC<TaskRowProps> = observer(({ task, handleStatusChange }) => {
  const { id, title, description, status } = task;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleStatusChange(id, event.target.value);
  };

  return (
    <tr className='hover'>
      <td className="max-w-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </td>
      <td className='max-w-sm'>
        <select value={status} onChange={handleChange} className='select select-primary w-full max-w-xs'>
          <option disabled selected className='font-bold'>Select Status</option>
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
      <td>
        {/* Actions buttons (Edit and Delete) */}
      </td>
    </tr>
  );
});

export default TaskRow;
