# Full-Stack Signup & Signin App

A simple full-stack authentication application built with React, Node.js, Express, and PostgreSQL. Users can create an account, securely store their password as a bcrypt hash, and sign in using their email and password.

## Features

- User registration with username, email, and password
- User signin with email and password
- Password hashing using bcrypt
- PostgreSQL database integration
- Duplicate username and email prevention
- Input validation and API error handling
- React forms with controlled components
- REST API integration using Fetch API

## Tech Stack

**Frontend**
- React
- JavaScript
- React Router
- HTML and CSS
- Fetch API

**Backend**
- Node.js
- Express.js
- PostgreSQL
- `pg` PostgreSQL driver
- bcrypt
- dotenv

**Database and Tools**
- PostgreSQL
- Docker
- Git and GitHub
- curl

## Project Structure

```text
Assignment/
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── signin.jsx
│   │   │   └── signup.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .gitignore
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── routes/
│   │   │   └── auth.js
│   │   ├── app.js
│   │   └── server.js
│   ├── schema.sql
│   ├── docker-compose.yml
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the application:

- Node.js and npm
- Docker Desktop
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SunnyRajput9198/Assignment.git
cd Assignment
```

### 2. Start PostgreSQL

From the backend directory, start the database using Docker Compose:

```bash
cd backend
docker compose up -d
```

Ensure the PostgreSQL port and credentials in `docker-compose.yml` match your local configuration.

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` directory. Use your own local database credentials:

```env
DATABASE_URL=postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5111/YOUR_DATABASE
PORT=3000
```

Do not commit your `.env` file or real credentials to GitHub.

### 4. Install Backend Dependencies

From the `backend/` directory:

```bash
npm install
```

Start the backend using the script configured in `backend/package.json`. For example, if it defines a `dev` script:

```bash
npm run dev
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/signin` | Sign in with email and password |
| GET | `/api/db-test` | Test the database connection |

The database test endpoint is intended for local development.

## How It Works

1. The user submits the signup form in React.
2. The frontend sends the form data to the Express API using Fetch.
3. The backend validates the request and hashes the password using bcrypt.
4. PostgreSQL stores the user's username, email, and password hash.
5. During signin, the backend retrieves the user by email and compares the submitted password with the stored hash.
6. The backend returns a JSON response indicating success or failure.

## Security Notes

- Passwords are stored as bcrypt hashes rather than plain text.
- Parameterized SQL queries are used to reduce SQL injection risks.
- Unique database constraints prevent duplicate usernames and email addresses.
- Environment variables are used for local configuration.
- This learning project does not yet implement persistent sessions or token-based authentication.

## Future Improvements

- Display API success and error messages in the UI
- Add stronger server-side input validation
- Improve duplicate-account error handling
- Add persistent authentication
- Add automated backend tests
- Improve responsive UI design

## Author

**Sunny Rajput**

GitHub: [SunnyRajput9198](https://github.com/SunnyRajput9198)
