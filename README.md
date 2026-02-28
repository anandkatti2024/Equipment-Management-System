# 🛠 Equipment Management System (MERN Stack)

A full-stack web application built using the MERN stack to manage equipment and their maintenance lifecycle.

This system allows users to manage equipment records, log maintenance activities, and enforce important business rules such as the 30-day status constraint.

---

# 🚀 Tech Stack

## Frontend
- React (Vite)
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 📁 Monorepo Structure

---

# ✨ Features

## Equipment Management
- View all equipment (table format)
- Add new equipment
- Edit existing equipment
- Delete equipment
- Reusable Add/Edit form component

## Equipment Type Handling
- Equipment types stored in database
- New types can be added from the form
- No hardcoded schema dependency

## Maintenance Workflow
- Add maintenance logs
- View maintenance history per equipment
- On maintenance addition:
  - Status automatically set to **Active**
  - Last Cleaned Date updated automatically

## Business Rule Enforcement

### 🔐 30-Day Status Constraint

Equipment **cannot be marked as "Active"** if:

- Last Cleaned Date is older than 30 days.

If violated:
- Backend rejects the request
- HTTP 400 status returned
- Meaningful error message displayed in UI

This rule is strictly enforced in the backend service layer.

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone <your-repository-link>
cd equipment-management-system
##Run backend
cd backend
npm install
PORT=5000
MONGO_URI=mongodb://localhost:27017/equipmentdb
npm run dev
#run frontend
cd frontend
npm install
npm run dev
