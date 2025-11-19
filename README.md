# Yunometa Assignment - TaskFlow
### TaskFlow is a lightweight, full-stack Task Manager application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Designed as a foundational CRUD project, it enables users to efficiently organize and track their tasks through an intuitive interface — create new tasks, view the full list, update existing items (e.g., change title, description, or status), and delete completed or unnecessary tasks. 

### While minimal in scope, TaskFlow demonstrates core full-stack competencies — from database modeling with Mongoose, to building scalable Express routes, to integrating React components with asynchronous API services. The app serves as a solid base for future enhancements (e.g., user authentication, due dates, drag-and-drop prioritization, or real-time sync via WebSockets).

### This project was developed as part of a Full-Stack Intern Assignment to validate proficiency in end-to-end application development using industry-standard JavaScript technologies.

### The application follows modern development best practices:
- RESTful API design with proper HTTP status codes
- Schema validation and error handling on the backend
- Client-side form validation and user feedback
- Clean separation of concerns across frontend and backend layers
- Responsive and accessible UI using semantic HTML and Tailwind CSS

## Tech stack
- Frontend: React + Vite  + TailwindCSS 
- Backend: Node.js + Express 
- Database - MongoDb  (Cloud)

## Setup (Backend)
1. cd Backend
2. npm install
3. Create `.env` with MONDODB_URL and PORT
4. node index.js

## Setup (Frontend)
1. cd Frontend
2. npm install
4. npm run dev

Open `http://localhost:5173` (or the port Vite reports).

## Endpoints
- `GET /api/tasks?page=1&filter=PENDING` — filtered list
- `GET /api/tasks/:id` — get single task
- `POST /api/tasks` — create
- `PUT /api/tasks/:id` — update
- `DELETE /api/tasks/:id` — delete

## Notes
- Pagination done in the backend by default

## Features
- Add new Task
- Edit existing Task
- Delete existing Task
- Filter All , Pending or Completed Tasks
- Pagination with next and previous button


