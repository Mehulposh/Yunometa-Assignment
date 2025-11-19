import { useState } from 'react'
import Header from './components/Header'
import LoadingIndicator from './components/LoadingIndicator'
import TaskCard from './components/TaskCard'

const task = [
    {
      id: '1',
      title: 'Complete project documentation',
      description: 'Write comprehensive documentation for the task management API including setup instructions and endpoint descriptions',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Fix authentication bug',
      description: 'Resolve the issue where users are logged out after 5 minutes of inactivity',
      status: 'pending'
    },
    {
      id: '3',
      title: 'Design database schema',
      description: 'Create ERD and design MongoDB schema for user profiles and task collections',
      status: 'completed'
    },
    {
      id: '4',
      title: 'Implement user registration',
      description: 'Build registration endpoint with email verification and password hashing',
      status: 'pending'
    },
    {
      id: '5',
      title: 'Set up CI/CD pipeline',
      description: 'Configure GitHub Actions for automated testing and deployment to production server',
      status: 'pending'
    },
    {
      id: '6',
      title: 'Create unit tests',
      description: 'Write Jest tests for all controller functions with minimum 80% code coverage',
      status: 'completed'
    }
  ]

function App() {
  return(
    <>
      <Header />
      <LoadingIndicator />
      <div className= 'border flex flex-col items-center justify-center'>
      {task.map(task => (
        <TaskCard key={task.is} task={task} />
      ))}
      </div>
    </>
  )

 
}

export default App
