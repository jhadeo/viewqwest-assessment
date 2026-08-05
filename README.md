# Getting Started

## How It Works

This project is split into a Laravel API and a React frontend.

- The backend exposes task endpoints in `backend/app/Http/Controllers/Api/TaskController.php`.
- `index()` returns all tasks and `store()` creates a new task.
- `backend/app/Http/Requests/Task/StoreRequest.php` validates incoming task data before it is saved.
- `backend/app/Http/Resources/TaskResource.php` formats task data into the JSON response used by the frontend.
- `backend/app/Models/Task.php` and the task migration define the database model and table structure.
- The frontend loads tasks in `frontend/src/App.jsx`, shows them in `TaskList.jsx`, and submits new tasks through `TaskForm.jsx`.
- `App.jsx` fetches `GET /api/tasks` on load and sends `POST /api/tasks` when the form is submitted.

## Backend

```bash
cd backend
php artisan serve --port=8000
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```
