import React from 'react';
import { observer } from 'mobx-react-lite';
import { FaRegTrashCan } from 'react-icons/fa6';

interface TaskRowProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
  handleStatusChange: (taskId: number, newStatus: string) => void;
  handleDeleteTask: (taskId: number) => void;
}

const TaskRow: React.FC<TaskRowProps> = observer(({ task, handleStatusChange, handleDeleteTask }) => {
  const { id, title, description, status } = task;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleStatusChange(id, event.target.value);
  };

  const handleDelete = () => {
    handleDeleteTask(id);
  };

  return (
    <tr className="hover">
      <td className="max-w-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </td>
      <td className="max-w-sm">
        <select value={status} onChange={handleChange} className="select select-primary w-full max-w-xs">
          <option disabled selected className="font-bold">Select Status</option>
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
      <td className="flex justify-center pt-7">
          <FaRegTrashCan cursor ="pointer" className='text-red-500 hover:text-red-600' size={20} onClick={handleDelete}/>
      </td>
    </tr>
  );
});

export default TaskRow;
