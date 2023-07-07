import React from 'react';

interface TaskRowProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
  const { id, title, description, status } = task;

  return (
    <tr className='hover'>
      <td >
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </td>
      <td className='text-center'>{status}</td>
      <td >
        {/* Actions buttons (Edit and Delete) */}
      </td>
    </tr>
  );
};

export default TaskRow;
