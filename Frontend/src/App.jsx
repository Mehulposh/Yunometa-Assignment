import React,{ useEffect, useState } from 'react'
import Header from './components/Header'
import LoadingIndicator from './components/LoadingIndicator'
import TaskGrid from './components/TaskGrid'
import { fetchTasks , deleteTask, updateTask, createTask} from './services/apiServices';
import TaskModal from './components/TaskModal';

function App() {
  
  // STATE MANAGEMENT
  const [tasks, setTasks] = useState([]);                // All tasks for the page
  const [page, setPage] = useState(1);                   // Current page
  const [totalPages, setTotalPages] = useState(1);       // Total pages
  const [isLoading, setIsLoading] = useState(false);     // Loader state
  const [isOpen, setIsOpen] = useState(false);           // Modal visibility
  const [isEditing, setIsEditing] = useState(null);      // Editing task (null = adding new)

  
  // FETCH TASKS WITH PAGINATION
  useEffect(() => {
    const getTasks = async () => {
    setIsLoading(true)

    try {
      const response = await fetchTasks(page);
      console.log(response);
      setTasks(response.tasks);
      setTotalPages(response.totalPages)
      
    } catch (error) {
      console.log(error);
      alert('Error fetching tasks')
      
    }
    setIsLoading(false)
  }
    getTasks()
  },[page])

  /**
   * DELETE TASK HANDLER
   * @param {String} id 
   */
  const onDelete = async (id) => {
    
    try {
      await deleteTask(id)
      
      // Remove deleted task from UI
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete task");
    }
  } 

  
  /**
   * OPEN EDIT MODAL
   * @param {Object} task 
   */
  const onEdit = async (task) => {
    setIsEditing(task)   // Preload task in modal
    setIsOpen(true)     // Open modal
  }

  /**
   * SUBMIT CREATE / UPDATE TASK
   * @param {Object} taskData 
   */
  const handleSubmit = async (taskData) => {
    try {
      if(isEditing){
         // UPDATE EXISTING TASK 
        await updateTask(isEditing._id,taskData)
        
        // Refresh current page
        const refreshed = await fetchTasks(page);
        setTasks(refreshed.tasks);

      }else{
        //  CREATE NEW TASK 
        await createTask(taskData)
        
        // Refresh current page (page 1 usually contains latest tasks)
        const refreshed = await fetchTasks(1);
        setTasks(refreshed.tasks);
        setPage(1); // optional but recommended
        setTotalPages(refreshed.totalPages);
        
      }
    } catch (error) {
      console.error("Error while saving task:", error);
      alert(`Error while ${isEditing ? "updating" : "saving"} task`)
    }
  }

  return(
    <main>
      {/* HEADER */}
      <Header />

      {/* LOADING STATE */}
      {isLoading && <LoadingIndicator />}

      {/* MAIN CONTENT */}
      <div className='flex flex-col items-center mt-5 w-full'>
         <p className=' underline text-3xl bg-gray-300 px-3 py-1 rounded font-semibold'>Task Manager</p>

         {/* TASK GRID */}
        <TaskGrid tasks={tasks} onDelete={onDelete} onEdit={onEdit}/>

         {/* PAGINATION CONTROLS */}
        <div className='flex items-center justify-center gap-4 py-3 mt-4 w-full bg-gray-400 font-semibold text-white'>
          <button 
           className={`px-3 py-1 text-lg rounded ${page === 1 ? "bg-gray-300 text-black" : "bg-green-400"}`}
            disabled = {page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <p>Page <span className='bg-amber-500 px-2 py-1 underline'>{page}</span> of {totalPages}</p>

          <button 
            className={`px-3 py-1 text-lg rounded ${page === totalPages ? "bg-gray-300 text-black" : "bg-green-400"}`}
            disabled = {page === totalPages }
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
      
       {/* ADD BUTTON */}
      <div 
        onClick={() => {
          setIsEditing(null);  // Reset editing mode
          setIsOpen(true);     // Open modal
        }}
        className='bg-blue-500 w-14 h-14 flex items-center justify-center rounded-full text-3xl text-white fixed bottom-10 right-10'
      >
        +
      </div>

      <TaskModal 
        isOpen={isOpen} 
        isEditing={isEditing} 
        onSubmit={handleSubmit}
        onClose={() => {setIsOpen(false),setIsEditing(null)}}/>
    </main>
  )

 
}

export default App
