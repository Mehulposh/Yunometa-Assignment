import React,{ useEffect, useState } from 'react'
import Header from './components/Header'
import LoadingIndicator from './components/LoadingIndicator'
import TaskGrid from './components/TaskGrid'
import { fetchTasks , deleteTask} from './services/apiServices';

function App() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [isLoading, setIsLoading] = useState(false);


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


  const onDelete = async (id) => {
    console.log(id);
    
    try {
      const response = await deleteTask(id)
      console.log(response);
      
      // if(response.status){
      //   alert("Task Deleted")
      // }
    } catch (error) {
      console.log(error);
      
    }
  }

  return(
    <>
      <Header />
      {isLoading && <LoadingIndicator />}
      <div className='flex flex-col items-center mt-5 w-full'>
         <p className=' underline text-3xl bg-gray-300 px-3 py-1 rounded font-semibold'>Task Manager</p>
        <TaskGrid tasks={tasks} onDelete={onDelete}/>

        <div className='flex items-center justify-center gap-4 py-3 mt-4 w-full bg-gray-400 font-semibold text-white'>
          <button 
           className={`px-3 py-1 text-lg rounded ${page === 1 ? "bg-gray-300 text-black" : "bg-green-400"}`}
            disabled = {page === 1}
            onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <p>Page <span className='bg-amber-500 px-2 py-1 underline'>{page}</span> of {totalPages}</p>
          <button 
            className={`px-3 py-1 text-lg rounded ${page === totalPages ? "bg-gray-300 text-black" : "bg-green-400"}`}
            disabled = {page === totalPages }
            onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>
    </>
  )

 
}

export default App
