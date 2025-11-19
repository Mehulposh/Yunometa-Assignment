# Yunometa Assignment - Task Manager

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


