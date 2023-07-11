import React from 'react';

interface DeleteTaskModalProps {
  taskId: number;
  handleCloseModal: () => void;
  handleConfirmDelete: () => void; // Make sure this prop is defined
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  taskId,
  handleCloseModal,
  handleConfirmDelete,
}) => {
  const handleDelete = () => {
    handleConfirmDelete();
  };

  return (
    <div>
      <dialog id="delete_task_modal" className="modal modal-open">
        <div className="modal-box relative">
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
          <h3 className="font-bold text-lg mb-1.5">Confirm Delete Task</h3>
          <p>Are you sure you want to delete this task?</p>
          <div className="flex justify-end mt-3">
            <button className="btn btn-red mr-2" onClick={handleDelete}>
              Confirm
            </button>
            <button className="btn" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteTaskModal;
