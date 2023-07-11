"use client"

import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import AddTaskModal from './AddTaskModal';


const AddTaskBotton = () => {
  // State variable to control the modal visibility
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

  // Handler for opening the modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className="btn btn-primary w-full" onClick={handleOpenModal}>ADD NEW TASK<AiOutlinePlusCircle className='ml-1' size={18}/></button>
      {isModalOpen && <AddTaskModal handleCloseModal={handleCloseModal}/>}
    </div>
  )
}

export default AddTaskBotton