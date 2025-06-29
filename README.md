# 💼 CAREER-CODE: A Job Portal System

A comprehensive, full-featured job portal designed to bridge the gap between job seekers and employers. CAREER-CODE enables seamless job posting, searching, applying, and managing job-related activities with a secure and intuitive user experience.

🌐 **Live Site:** https://basic-job-portal-659eb.web.app

🌐 **Live Server:** [(https://github.com/Rakib-Hasan1/job-portal-server)]

---

## 🌟 Project Purpose

This project showcases my skills, creativity, and problem-solving capabilities by developing a real-world job portal system that streamlines recruitment and job application processes.

---

## 💡 Key Features

- 🔐 **Authentication System:** Secure email/password login, Google sign-in, and password recovery.
- 📋 **Job Management:** Full CRUD operations for job postings.
- 🔍 **Job Search & Filters:** Find jobs by title, type, experience level, and salary.
- 📝 **Job Applications:** Apply to jobs, manage submissions, and withdraw applications.
- 🧑‍💼 **Employer Tools:** Review applicants, update job statuses (Hired, Shortlisted, etc.).
- 🛡️ **Security:** Protected routes, JWT-based session management, and input validation.
- ⚙️ **Error Handling:** Friendly error messages, loading states, and edge case handling.
- 📱 **Responsive Design:** Mobile-first UI that works across all screen sizes.

---

## 🖥️ Application Pages

### 🔓 Public Pages
- `/` — Home page with live job postings
- `/jobs/details/:id` — Detailed job view

### 🔒 Protected Pages
- `/jobs` — Browse all jobs with filters and search
- `/add-jobs` — Add new job postings
- `/application/apply/:id` — Submit job application
- `/application/me` — Manage submitted applications
- `/my-jobs` — Manage posted jobs
- `/my-jobs/:id` — Review applications for a specific job
- `/jobs/update/:id` — Update existing job

---

## 🏗️ Architecture Overview

- **Navbar:** Navigation links, auth controls, user info
- **Footer:** Company info, policies, and social links
- **Dynamic Routing:** Pages rendered via client-side routing

---

## 🛠️ Technologies Used

| Category     | Tech Stack                                                               |
|--------------|--------------------------------------------------------------------------|
| Frontend     | React.js, Tailwind CSS, DaisyUI, React-router, Axios, Sweetalert2, more..|
| Backend      | Node.js, Express.js                                                      |
| Database     | MongoDB                                                                  |
| Auth         | Firebase Auth, Google Authentication                                     |
| Deployment   | firebase                                                                 |
|  | GitHub                                                                               |
| Version Ctrl | GitHub                                                                   |

---

## ✅ Features Checklist

### 🔐 Authentication
- Email/password & Google sign-in
- Password recovery
- Protected routes

### 🧰 Job Functionality
- Add/update/delete/view jobs

### 📝 Application Process
- Apply for jobs
- View/manage applications

### 🧑‍💼 Employer Tools
- View/edit/delete job posts
- Review applications with status updates

### 🔐 Security
- JWT for session handling
- Route & input protection

---

## 🧼 Best Practices Followed

### 💻 Code Quality
- Modular & reusable components
- Clean, readable, DRY code
- Consistent naming conventions

### ⚠️ Error Handling
- User-friendly frontend errors
- Backend errors with proper HTTP codes
- Boundary testing & edge case validation

### 🔒 Security
- JWT protection for sensitive routes
- Input validation to prevent vulnerabilities
- Firebase Auth for secure authentication

### 📱 Responsive UI
- Mobile-first design
- Tailwind-based grid system
- Accessible components

### 🗂️ Project Structure
- Organized folders: `components/`, `pages/`, `services/`, etc.
- Descriptive commit messages
- Well-documented README

---

## ⚡ Performance Optimization

- Lazy-loaded components
- React Query for state/data management
- Memoization to reduce re-renders

---

## 🌐 Deployment

- Hosted with [Basic-job-portal]
- CI/CD for automatic live updates
- Environment variables secured via `.env`

---

## 🧪 Testing

- Manual testing for all user flows
- Simulated error handling
- Robust validation in forms and routes

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it.

---

## 🙌 Author

**[MD RAKIB HASAN]** – Frontend based & Backend Developer  
📫 Reach me on [................]

---

### 💻 Ready to explore the job market? Check out the [https://basic-job-portal-659eb.web.app/](#) 🔗
