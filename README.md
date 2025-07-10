# 🧑‍💼 Full Stack Job Portal

A modern and responsive **Full Stack Job Portal** built with the **MERN Stack (MongoDB, Express, React, Node.js)** along with **Redux Toolkit**, **Tailwind CSS**, and **shadcn/ui**. This application allows job seekers to search and apply for jobs, while employers can post job listings and manage applicants.

---

## 🚀 Tech Stack

**Frontend:**
- React.js
- Redux Toolkit
- Tailwind CSS
- Shadcn UI
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (for file uploads)

---

## 📌 Features

### 👤 Job Seekers
- Register/Login (JWT-based)
- Search for jobs with filters
- Apply for jobs with resume upload
- View applied jobs
- Edit user profile

### 🏢 Employers
- Register/Login
- Post new jobs
- View applications
- Edit/Delete job posts
- View candidate profiles

### 🔐 Admin (optional)
- Manage users (employers & seekers)
- Remove inappropriate job posts
- View system analytics (basic)

### 🌐 General
- Responsive design
- Secure authentication with JWT
- State management via Redux Toolkit
- Elegant UI with shadcn/ui & Tailwind CSS
- Toast notifications & modals

---
🛠️ Installation & Setup
Prerequisites
Node.js & npm

MongoDB (Local or Atlas)

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/fullstack-job-portal.git
cd fullstack-job-portal
2. Setup Backend
bash
Copy
Edit
cd server
npm install
touch .env
Add the following to .env:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start backend:

bash
Copy
Edit
npm run dev
3. Set up Frontend
bash
Copy
Edit
cd ../client
npm install
npm run dev

## 📁 Project Structure

```bash
/job-portal
├── client
│   ├── public
│   ├── src
│   │   ├── app               # Redux Store
│   │   ├── components        # Shared UI components
│   │   ├── features          # Redux slices
│   │   ├── pages             # Route-based pages
│   │   ├── services          # API calls
│   │   └── index.js
│   └── tailwind.config.js
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
└── README.md
