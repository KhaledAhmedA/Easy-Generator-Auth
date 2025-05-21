# 🛠 Full Stack Authentication App

This is a **production-ready full stack authentication module** built using **React (TypeScript)** for the frontend and **NestJS** with **MongoDB** for the backend. It includes user registration, login, and access to a protected application route.

---

## ✨ Features

### 🔐 Frontend (React + TypeScript)
- **Sign Up** page with form validation:
  - Email must be in valid format
  - Name must be at least 3 characters
  - Password must be:
    - At least 8 characters
    - Contain a letter
    - Contain a number
    - Contain a special character
- **Sign In** page with form fields for email and password
- **Application page** displaying a welcome message and logout button
- Protected routing using JWT
- UI built with **[Tailwind CSS]**

### 🔧 Backend (NestJS + MongoDB)
- User registration and login APIs
- JWT authentication
- Password hashing using bcrypt
- Protected route accessible only with a valid JWT
- Input validation with class-validator
- Basic logging
- Swagger API documentation at `/api`

---

## 🚀 Tech Stack

| Layer      | Tech Stack                  |
|------------|-----------------------------|
| Frontend   | React, Nextjs, TypeScript, Tailwind CSS |
| Backend    | NestJS, TypeScript, MongoDB, Mongoose |
| Auth       | JWT, bcrypt |
| Validation | class-validator |
| Docs       | Swagger |

---

## 📁 Folder Structure

fullstack-auth-app/
│
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── ...
│
└── server/ # NestJS backend
├── src/
├── .env.example
└── ...





---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or cloud)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/easy-generator-auth-app.git
cd easy-generator-auth

- You can genrate keys by this command from your Terminal
openssl rand -base64 32 

- Setup Backend
cd backend
npm install
cp .env.example .env    # Add your MongoDB URI and JWT secret here
npm run start




- Setup Frontend
cd ../frontend
npm install
cp .env.example .env    # Add your MongoDB URI and JWT secret here
npm run dev



🔐 API Endpoints
Method	Endpoint	    Description
POST	/auth/register	Register a new user
POST	/auth/login	    Authenticate user
GET	    /protected	    Protected route



- FEATURES

✅ JWT-based auth with token storage in localStorage

✅ Basic logging with NestJS logger

✅ Modular code structure

✅ Environment configuration

📦 Future Improvements
✅ API validation & error handling

⬜ CI/CD via GitHub Actions

⬜ Refresh token flow


📬 Submission
This app was built as part of an internal Full Stack Developer assessment.

Feel free to reach out for questions or improvements.

👨‍💻 Author
Your Name
GitHub: https://github.com/KhaledAhmedA
Email: khaled.ahmed.alkharashi@gmail.com
Website: https://khaled-iota.vercel.app/
Linkedin: https://www.linkedin.com/in/khaled-al-kharashi-10653b247/

