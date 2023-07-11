import React from 'react';
import { taskStore } from '../stores/taskStore';

interface AddTaskModalProps {
  handleCloseModal: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ handleCloseModal }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState('');
  const handleSubmit = () => {
    
    if (!title || !description) {
      setError('These fields cannot be empty');
      return;
    }
    
    // Perform validation and add the task
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: 'To-Do',
    };

    taskStore.addTask(newTask);

    // Reset the input fields
    setTitle('');
    setDescription('');

    handleCloseModal();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal modal-open">
        <form method="dialog" className="modal-box relative">
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
          <h3 className="font-bold text-lg mb-1.5">Add New Task</h3>
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
};

export default AddTaskModal;
