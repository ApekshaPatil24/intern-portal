<img width="1897" height="910" alt="image" src="https://github.com/user-attachments/assets/f4cd528c-8de1-4e2c-9b7e-b968fdb667b6" /># 📚 Intern Dashboard Portal

A modern and responsive full-stack web application to manage internships, built using **React**, **Tailwind CSS**, **Node.js**, and **Express**.

---

## 🚀 Hosting

### Frontend  
- Hosted on: [Vercel](https://vercel.com/)  
- Live URL: 👉 https://intern-portal-one.vercel.app
### Backend (Suggestions)
- Hosted on: [Vercel](https://onrender.com/)  
- [Render](https://intern-portal-bpnp.onrender.com)

> 💡 You can also clone the GitHub repo and run it locally.

---

## 🛠️ Tech Stack

**Frontend**:
- React 19 (Vite)
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide Icons

**Backend**:
- Node.js
- Express.js
- MongoDB or MySQL *(choose depending on your setup)*

---
## 📂 Folder Structure
intern-dashboard/
├── frontend/ → React + Vite application
│ ├── public/
│ ├── src/
│ │    ├── components/
│ │    │       ├── Login.jsx
│ │    │       ├── Navbar.jsx
│ │    │       ├── Dashboard.jsx
│ │    │       ├── Leaderbaord.jsx
│ │    │       ├── Reward.jsx
│ ├── package.json
│ └── ...
├── backend/ → Node.js + Express API
│ ├── routes/
│        ├── internroutes.js
│ ├── package.json
│ └── data/
│         └── dummydata.json
│ └── server.js
└── README.md

---

## 🧑‍💻 Local Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/ApekshaPatil24/intern-portal.git
cd intern-dashboard

### 2. Clone the Repository
cd frontend
npm install
npm run dev

### 3. Backend Setup
cd ../backend
npm install
npm run start

---⚠️ Create a .env file in /backend and add necessary environment variables like DB_URI, PORT, etc.

### Deployment Instructions:
Frontend Deployment on Vercel
Push the frontend folder to GitHub.

Go to vercel.com → Import Project.

Select your repo → Set the following in project settings:

Framework Preset: Vite

Build Command: npm run build

Output Directory: dist

Click Deploy.

🚀 Backend Deployment Suggestions
Option 1: Render
Push backend to a separate GitHub repo.

Go to Render → New Web Service.

Connect repo and set:

Build Command: npm install

Start Command: node index.js or your entry file

Add environment variables in Render dashboard.


✨ Features
🎯 Interactive dashboard

🔐 Secure login/signup

📝 Internship listing and application

⚡ Dynamic and responsive UI

🧠 Smooth user experience with animations

📸 Screenshots:
Login Page: <img width="1897" height="910" alt="ss1-intern" src="https://github.com/user-attachments/assets/ebc10192-5661-48eb-b4cb-224c47f63995" />
Dashboard Page: <img width="1896" height="910" alt="ss2-intern" src="https://github.com/user-attachments/assets/08be68ca-769e-4af8-8d1b-cef0783cb098" />
Leaderboard Page : <img width="1896" height="912" alt="ss3-intern" src="https://github.com/user-attachments/assets/db36e809-e429-4129-8194-77e4530b8402" />

Author
Apeksha Patil

GitHub: @ApekshaPatil24

LinkedIn: linkedin.com/in/apeksha-patil24



