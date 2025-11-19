import React from 'react'
import TaskCard from './TaskCard'

/**
 * TaskCardGrid Component
 * Displays a grid of task cards
 * @param {Object} props - Component props
 * @param {Array} props.tasks - Array of task objects to display
 * @param {Function} props.onEdit - Callback function when edit button is clicked
 * @param {Function} props.onDelete - Callback function when delete button is clicked
 */
const TaskGrid = ({ tasks = [], onDelete,onEdit}) => {
     // Display message when no tasks are available
  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">No tasks found. Create your first task to get started!</p>
      </div>
    );
  }


  return (
    <div>
     {/* Grid Container - Responsive columns */}
        <div className="flex flex-col items-center w-full px-4 ">
            {tasks.map(task => (
                <TaskCard 
                    key={task._id}
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    </div>
  )
}

export default TaskGrid