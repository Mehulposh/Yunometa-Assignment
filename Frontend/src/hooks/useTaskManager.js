import { useState } from "react";
import { createTask, updateTask } from "../service";

/**
 * Custom hook for managing task operations (create, update)
 * Handles modal state, form data, and task submission logic
 * @returns {Object} Task management functions and state
 */
export const useTaskManager = () => {
  // State to store current task data being created or edited
  const [taskData, setTaskData] = useState(null);
  
  // Flag to determine if user is editing an existing task or creating a new one
  const [isEditing, setIsEditing] = useState(false);
  
  // Controls modal/dialog visibility
  const [open, setOpen] = useState(false);

  /**
   * Opens the modal for creating a new task
   * Initializes empty form data
   */
  const handleAddClick = () => {
    setIsEditing(false);
    setTaskData({ title: "", description: "", status: "pending" }); // Added default status
    setOpen(true);
  };

  /**
   * Opens the modal for editing an existing task
   * Pre-populates form with existing task data
   * @param {Object} task - The task object to edit
   */
  const handleEditClick = (task) => {
    setIsEditing(true);
    setTaskData(task);
    setOpen(true);
  };

  /**
   * Closes the modal and resets task data
   */
  const handleClose = () => {
    setOpen(false);
    setTaskData(null);
  };

  /**
   * Saves the task (creates new or updates existing)
   * @param {Function} refreshTasks - Callback function to refresh the task list after save
   */
  const handleSave = async (refreshTasks) => {
    // Validate required fields before submission
    if (!taskData?.title?.trim()) {
      console.error("Title is required");
      return;
    }

    try {
      if (isEditing) {
        // Update existing task - send only necessary fields
        await updateTask(taskData._id, {
          title: taskData.title,
          description: taskData.description,
          status: taskData.status, // Include status in update
        });
      } else {
        // Create new task - send as JSON object instead of FormData
        await createTask({
          title: taskData.title,
          description: taskData.description,
          status: taskData.status || "pending", // Default to pending if not set
        });
      }
      
      // Refresh the task list to show updated data
      await refreshTasks();
      
      // Close modal and reset form
      handleClose();
    } catch (err) {
      console.error("Error saving task:", err);
      // TODO: Consider adding user-facing error notification here
    }
  };

  // Return all state and functions needed by components
  return {
    taskData,
    isEditing,
    open,
    handleAddClick,
    handleEditClick,
    handleClose,
    handleSave,
    setTaskData,
  };
};