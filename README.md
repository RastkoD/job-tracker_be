# JobTrckr API (Backend)

### Node.js + Express + Supabase

### :rocket: [API Live](https://job-tracker-be.onrender.com/api/jobs)

This is the backend service for JobTrckr.  
It provides a simple REST API for managing job applications and persists data with Supabase.

## Endpoints

- `GET /api/jobs` – Fetch all job applications
- `POST /api/jobs` – Add a new job application
- `PUT /api/jobs/:id` – Update an existing job
- `DELETE /api/jobs/:id` – Remove a job
- `POST /api/jobs/login` – Authenticate with app password

## Tech

- **Express.js** for routing
- **Supabase** as database
- **CORS + dotenv** for config and cross-origin
