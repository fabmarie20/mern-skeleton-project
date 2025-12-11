# Pastel Planner – Sprint 1 (COMP229)

## 👩‍💻 Team Members
- **Francesca Mpolomena** — Student ID: *301419292*  
- **Surya Anthode Sreekumar**

## 👨‍🏫 Instructor
Blessing Ajiboye

---

## 📌 Project Overview
This project is the first Sprint of the *Pastel Planner* application.  
It is based on the **MERN Skeleton** starter, with modifications to:

- Set up project environment  
- Customize the Home Page UI  
- Configure automated testing tools  
- Run Lighthouse and Cypress audits  
- Set up Agile board (Trello)  
- Prepare documentation, screenshots, and media for Sprint review  

This sprint demonstrates early progress toward a MERN-based planner application.

---

## 🚀 Features Completed in Sprint 1
### ✔ **Development Tasks**
- Set up MERN Skeleton project locally  
- Verified server starts successfully  
- Customized Home Page UI  
- Configured Jest testing environment  
- Wrote unit test for Home component  
- Wrote snapshot test for Home component  
- Installed & configured Cypress for E2E testing  
- Created Cypress E2E test for Home Page title  

### ✔ **Testing & Performance**
- Ran Jest unit tests  
- Captured Cypress passing test  
- Performed Lighthouse Performance Audit  
- Collected screenshots as evidence  

### ✔ **Project Management**
- Created Agile Board in Trello  
- Added Sprint 1 tasks  
- Categorized tasks into To Do / Doing / Testing / Done  
- Moved tasks based on progress  

### ✔ **Documentation & Media**
- Created External Design Document (EDD)  
- Created 2-slide Sprint Presentation (PowerPoint)  
- Recorded demo video (to be added)  
- Pushed project to GitHub and prepared README  

---

## 🛠 Technologies Used
- **React (Vite)** – Frontend  
- **Node.js / Express** – Backend  
- **Jest** – Unit testing  
- **Cypress** – End-to-End testing  
- **Google Lighthouse** – Performance audit  
- **Trello** – Agile/Scrum board  
- **GitHub** – Source control  

> ⚠ **Note:** The MERN Skeleton backend contains MongoDB configuration, but Sprint 1 did *not* require actual database CRUD operations.

---

## ▶️ Running the Project

### 1️⃣ Install dependencies  
```bash
npm install

---

## 🎥 Demo Video

You can watch the Sprint 1 demo video here:

👉 **https://youtu.be/LqJ_KBOMGVY**

---

## 🚀 Sprint 2 / Project Part 3 – Tasks API & UI

This part extends the Pastel Planner MERN application with a simple **Tasks** feature.

### 🔗 Backend – Tasks REST API

Base URL: `http://localhost:3000/api/tasks`

Implemented endpoints:

- `POST /api/tasks` – Create a new task  
- `GET /api/tasks` – Get all tasks  
- `GET /api/tasks/:taskId` – Get a single task by id  
- `PUT /api/tasks/:taskId` – Update an existing task  
- `DELETE /api/tasks/:taskId` – Delete a task  

Task model (simplified):

- `title` (String, required)  
- `description` (String, optional)  
- `status` (String, enum: `"todo" | "in-progress" | "done"`, default `"todo"`)  

Screenshots for these endpoints are stored in:  
`/screenshots/part3/api/`

### 🎨 Frontend – Tasks page

- Added `TaskList.jsx` React component under `client/src/components`.
- Configured React Router in `MainRouter.jsx` with route:

  ```jsx
  <Route path="/tasks" element={<TaskList />} />

---

## 🎥 Sprint 2 – Demo Video

A full demonstration of the Tasks Feature (backend CRUD, React UI, routing, Agile tracking, and code walkthrough) is available here:

👉 **[Watch Sprint 2 Demo Video on YouTube](https://youtu.be/RfjIMr6l4dk)**

This video includes:
- Project overview
- Backend CRUD operations using Thunder Client
- React TaskList UI demonstration
- Routing update with `/tasks`
- Code explanation (model, controller, routes, React component)
- Agile workflow overview (Trello)
- Final implementation summary

## 🎥 Final Demo Video (YouTube)
https://youtu.be/4VXeOanA6Y4
