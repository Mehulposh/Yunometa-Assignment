import React from 'react'
import { Pencil, Trash2,Clock, CheckCircle } from 'lucide-react';


/**
 * TaskTable Component
 * Displays a table of tasks with edit and delete functionality
 * @param {Object} props - Component props
 * @param {Array} props.tasks - Array of task objects to display
 * @param {Function} props.onEdit - Callback function when edit button is clicked
 * @param {Function} props.onDelete - Callback function when delete button is clicked
 */
const TaskCard = ({task,onDelete,onEdit}) => {
   /**
   * Handles the edit action for a task
   */
  const handleEdit = () => {
    if (onEdit) {
      onEdit(task);
    }
  };


  /**
   * Handles the delete action for a task
   * Shows confirmation dialog before deletion
   */
  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      if (onDelete) {
        onDelete(id);
      }
    }
  };
   /**
   * Returns appropriate styling classes based on task status
   * @param {string} status - The status of the task ('completed' or 'pending')
   * @returns {string} Tailwind CSS classes for status badge
   */
  const getStatusStyle = (status) => {
    return status === 'COMPLETED'
      ? 'bg-green-100 text-green-700 border-green-200'
      : 'bg-yellow-100 text-yellow-700 border-yellow-200';
  };

  /**
   * Returns the appropriate icon based on task status
   * @param {string} status - The status of the task
   * @returns {JSX.Element} Icon component
   */
  const getStatusIcon = (status) => {
    return status === 'COMPLETED' 
      ? <CheckCircle className="w-4 h-4" />
      : <Clock className="w-4 h-4" />;
  };




 return(
  <div className="bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-md border border-gray-200 overflow-hidden mt-4 w-full max-w-xl">
    {/* Card Header with Status */}
    <div className="p-5 border-b border-gray-100">
      <div className="flex items-start justify-between">
        {/* Task Title */}
          <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
            {task.title}
          </h3>

        {/* Status Badge */}
          <span
            className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(
              task.status
            )}`}
          >
            {getStatusIcon(task.status)}
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
      </div>
    </div>

    {/* Card Body with Description */}
    <div className="p-5">
        <p className="text-sm text-gray-600 leading-relaxed">
          {task.description || 'No description provided'}
        </p>
    </div>

    {/* Card Footer with Action Buttons */}
    <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
      <div className="flex justify-end gap-3">
        {/* Edit Button */}
          <button
            onClick={handleEdit}
            className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
            title="Edit task"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(task._id)}
            className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
      </div>
    </div>
  </div>
 )
}

export default TaskCard