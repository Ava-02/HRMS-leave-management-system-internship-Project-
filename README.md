# HRMS-leave-management-system-internship-Project-
# HRMS Leave Management System

This is a manually built **Leave Management System** for managing employee leave requests. It is designed using **HTML**, **CSS**, and **JavaScript** with `localStorage` to handle user data, leave records, and login sessions without any backend.

---

## 📁 Project Structure

HRMS/
├── index.html # Landing/Home page
├── login.html # Login and Register page
├── approval.html # Dashboard (used by both employee and manager)
├── applyLeave.html # Leave application + leave history page for employee
├── style.css # All project styling
├── employee.js # Handles leave form submission and display for employees
├── manager.js # Loads and updates leave approval data for managers
├── favicon.ico # Favicon for manager
├── favicon-employee.ico # Favicon for employee
└── README.md # Project documentation


---

## ✅ Features

- 🔐 **Login and Registration System**
  - Allows role-based access (Employee or Manager)
  - Data is saved in localStorage (no database required)

- 📋 **Apply for Leave (Employee)**
  - Choose leave type
  - Select start and end date
  - Submit with a reason

- 👁️ **View and Approve Leaves (Manager)**
  - Manager can view all employee leave requests
  - Can approve or reject with confirmation prompt
  - Filter leaves by status (Pending, Approved, Rejected)

- 📊 **Dashboard Cards**
  - Cards show counts for total, approved, and pending leaves

- 📌 **Leave History**
  - Employees can see a list of their own applied leaves with status

---

## 👨‍💼 Sample Users

- **Employee:**
  - Email: `newuser@example.com`
  - Password: `pass123`

- **Manager:**
  - Email: `manager@hrms.com`
  - Password: `admin`

---

## 🚀 How to Run

1. Open `index.html` in your browser.
2. Click on "Login/Register" to go to the login portal.
3. Register a new account or use one of the sample users.
4. After login:
   - You are redirected to `approval.html`.
   - The layout and access are based on your role.
5. Employees:
   - Can apply for leave from the "Apply Leave" link.
   - See their leave history below the form.
6. Managers:
   - Click "View Leaves" in sidebar to see all employee requests.
   - Approve or reject leaves with one click.

---

## 📂 LocalStorage Keys Used

- `users` – stores registered users with roles
- `currentUser` – keeps track of the logged-in user session
- `leaveRequests` – holds all submitted leave records

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage (No backend)

---

## 🔍 Notes

- This project **does not use a backend**. All data is stored in the user's browser.
- Built to simulate a real-world HRMS dashboard with manual front-end logic.
- Designed to look professional using custom styling (no frameworks).

---

## 📸 Screenshots

> To be added based on your deployment or as needed.

---

## 🙋‍♀️ Author

Built by Amisha Linjhara as part of an academic internship project.  
Designed to look as manually coded and realistic as possible.

---

