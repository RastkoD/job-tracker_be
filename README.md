# JobTrckr API (Backend)

### Node.js + Express + Supabase

### :rocket: [API Live](https://job-tracker-be.onrender.com/api/jobs)

Backend REST API for JobTrckr - a job application tracking system. Handles authentication, CRUD operations, and data persistence with Supabase.

## 📡 API Endpoints

| Method   | Endpoint          | Description                |
| -------- | ----------------- | -------------------------- |
| `GET`    | `/api/jobs`       | Fetch all job applications |
| `POST`   | `/api/jobs`       | Add a new job application  |
| `PUT`    | `/api/jobs/:id`   | Update an existing job     |
| `DELETE` | `/api/jobs/:id`   | Remove a job               |
| `POST`   | `/api/jobs/login` | Authenticate user          |

## 🛠️ Tech Stack

- **Express.js** - Web framework and routing
- **Supabase** - PostgreSQL database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## 🔗 Frontend

The frontend application for this API can be found here:  
[JobTrckr Frontend](https://github.com/RastkoD/job-tracker_fe)
