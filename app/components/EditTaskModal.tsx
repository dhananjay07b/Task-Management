import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../stores/taskStore';

interface EditTaskModalProps {
  taskId: number;
  title: string;
  description: string;
  handleCloseModal: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = observer(({ taskId, handleCloseModal }) => {
  const task = taskStore.tasks.find((t) => t.id === taskId);

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!title || !description) {
      setError('These fields cannot be empty');
      return;
    }

    taskStore.editTask(taskId, title, description);

    setTitle('');
    setDescription('');

    handleCloseModal();
  };

  return (
    <div className='text-center'>
      <dialog id="edit_task_modal" className="modal modal-open">
        <form method="dialog" className="modal-box relative">
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
          <h3 className="font-bold text-lg mb-1.5">Edit Task</h3>
          <div>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="input input-bordered input-primary w-full my-1 max-w-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="description"
              placeholder="Description"
              className="input input-bordered input-primary h-48 w-full my-1 max-w-sm max-h-48"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
});

export default EditTaskModal;
