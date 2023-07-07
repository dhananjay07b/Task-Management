import React from 'react';

interface AddTaskModalProps {
  handleCloseModal: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({handleCloseModal}) => {
// State variables for the task details
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    // const [isModalOpen, setModalOpen] = React.useState<boolean>(false);  
// Handler for submitting the task
    const handleSubmit = () => {
// Perform validation and add the task
// Reset the input fields
    setTitle('');
    setDescription('');
    handleCloseModal();
    };
// Close the modal
// You can use a state variable or props to control the modal visibility
  //   const handleCloseModal = () => {
  //   setModalOpen(false);
  // };
  return (
    <div> 
    {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>
      Add New Task
    </button> */}
    <dialog id="my_modal_3" className="modal modal-open">
      <form method="dialog" className="modal-box relative">
        <div>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
        </div>
        <h3 className="font-bold text-lg">Add New Task</h3>
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </dialog>
    </div>
  );
};

export default AddTaskModal;
