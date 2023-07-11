import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

interface TaskRowProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
  handleStatusChange: (taskId: number, newStatus: string) => void;
  handleDeleteTask: (taskId: number) => void;
  handleEditTask: (taskId: number) => void;
}

const TaskRow: React.FC<TaskRowProps> = observer(({ task, handleStatusChange, handleDeleteTask }) => {
  const { id, title, description, status } = task;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleStatusChange(id, event.target.value);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    handleDeleteTask(id);
    handleCloseModal();
  };

  return (
    <tr className="hover">
      <td className="max-w-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </td>
      <td className="max-w-sm">
        <select value={status} onChange={handleChange} className="select select-primary w-full max-w-xs">
          <option disabled selected className="font-bold">
            Select Status
          </option>
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
      <td className="flex justify-center pt-7">
        <FaRegEdit
          cursor="pointer"
          className="text-blue-500 hover:text-blue-700"
          size={21}
          onClick={handleEdit}
        />
        <div className="px-2"></div>
        <FaRegTrashCan
          cursor="pointer"
          className="text-red-500 hover:text-red-700"
          size={20}
          onClick={handleDelete}
        />
      </td>

      {isEditModalOpen && (
        <EditTaskModal
          taskId={id}
          title={title}
          description={description}
          handleCloseModal={handleCloseModal}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteTaskModal
          taskId={id}
          handleCloseModal={handleCloseModal}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </tr>
  );
});

export default TaskRow;
