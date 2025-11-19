import React ,{useEffect, useState} from 'react'
import Modal from 'react-modal'

// Required by react-modal for accessibility
Modal.setAppElement("#root");


const TaskModal = ({ isOpen, onClose,isEditing ,onSubmit}) => {
    /**
     *FORM STATE
    */
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    /**
      *PREFILL FORM WHEN EDITING
      *Runs when modal opens or when isEditing changes
    */
    useEffect(() => {
        if(isEditing){
             // Prefill values for Edit mode
            setTitle(isEditing.title)
            setDescription(isEditing.description)
            setStatus(isEditing.status)
        }else{
            // Reset fields when adding a new task
            setTitle('')
            setDescription('')
            setStatus('PENDING')    // default status
        }
    },[isEditing,isOpen])

    /**
     * HANDLE FORM SUBMISSION
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault()

         // Create or Update payload
         // If creating, DO NOT send status → backend handles it
         const taskData = isEditing 
         ? {title , description, status} // Update → include status
         : {title, description} // Create → backend assigns "PENDING" automatically

         onSubmit(taskData);    // send data to parent
         onClose(); // close modal
    }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
        className="bg-white p-6 rounded-md w-[90%] max-w-md shadow-xl outline-none"
    >

        {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{isEditing ? 'Edit Task' : 'Add New Task' }</h2>

         {/* Close Button */}
        <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700 text-xl">
          ✕
        </button>
      </div>

      {/* Body */}
      <div>
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4"   
        >  
            {/* TITLE */}
            <label className="flex flex-col gap-1">
                Title : 
                <input 
                    placeholder='Enter the task title'
                    className='border px-2 py-1 rounded'
                    value={title }
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                 />
            </label>
            {/* DESCRIPTION */}
            <label className="flex flex-col gap-1">
                Description : 
                <textarea 
                    placeholder='Enter the task description'
                    className='border px-2 py-1 rounded'
                    value={description }
                    onChange={(e)=> setDescription(e.target.value)}
                    required
                 />
            </label>

            {/* STATUS  (Disabled in Add mode) */}
            <label className="flex flex-col gap-1">
                Status : 
                <input 
                    placeholder='Enter the task status'
                    className={`border px-2 py-1 rounded ${
                    !isEditing ? "bg-gray-200 text-gray-500" : ""
                    }`}
                    value={status }
                    onChange={(e) => setStatus(e.target.value)}
                    disabled={!isEditing}

                 />
            </label>

             {/* SUBMIT BUTTON */}
            <button 
                type='submit'
                className="cursor-pointer mt-4 bg-blue-600 text-white py-2 rounded"
            >
                {isEditing ? 'Update' : 'Add'}
            </button>
        </form>
      </div>
    </Modal>
  )
}

export default TaskModal