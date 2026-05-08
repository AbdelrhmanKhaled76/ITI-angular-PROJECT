# 🎬 Cinema Reservation System

A full-stack cinema reservation platform built with **Angular 21**, **Node.js**, **Express.js**, and **MongoDB**.
The application allows users to browse movies, reserve seats, complete payments, and manage their accounts, while admins can manage the cinema system through a dedicated admin panel.

## 🎬 Check Project Video 
[![Watch Demo](https://img.shields.io/badge/Watch%20Demo-Click%20Here-red?style=for-the-badge&logo=youtube)](https://drive.google.com/file/d/1pa-YI_D6s9m6ZHAf4Pb9NKuZhE1Vj10c/view?usp=sharing)

---

# 📌 Features

## 👤 Authentication & Authorization

* User registration and login
* JWT-based authentication
* Protected routes using Angular Guards
* Role-based authorization for admin access
* Guest guards for authentication pages

## 🎥 Movie Management

* Browse all movies
* View detailed movie information
* Showtimes support
* Dynamic movie pages

## 💺 Seat Reservation System

* Interactive seat selection
* Seat availability validation
* Reservation checkout flow

## 💳 Payment Integration

* Stripe payment integration
* Secure checkout process
* Booking confirmation flow

## 🤖 AI Chatbot Support

* Integrated OpenAI-powered cinema assistant that provides real-time movie and booking assistance using a simple Retrieval-Augmented Generation (RAG) approach

## 📊 Admin Dashboard

* Admin-only protected panel
* Manage movies and reservations
* Dashboard analytics support

## 🛡️ Security & Best Practices

* Environment variable configuration using dotenv
* JWT token validation middleware
* Request validation with express-validator
* HTTP interceptor support in Angular

---

# 🏗️ Tech Stack

## Frontend

* Angular 21
* TypeScript
* RxJS
* Chart.js
* ng2-charts
* SweetAlert2

## Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Stripe API
* OpenAI API
* Swagger Documentation

---

# 📂 Project Structure

```bash
ITI-angular-PROJECT/
│
├── Backend-API/          # Express.js Backend API
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   └── server.js
│
├── Cinema/               # Angular Frontend Application
│   ├── src/app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── models/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/MohamedEssam2127/ITI-angular-PROJECT.git
cd ITI-angular-PROJECT
```

---

# 🔧 Backend Setup

## 📦 Install Dependencies

```bash
cd Backend-API
npm install
```

---

## ▶️ Run the Backend Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Backend will run on:

```bash
http://localhost:3000
```
---

# 🎨 Frontend Setup

## 📦 Install Dependencies

Open a new terminal:

```bash
cd Cinema
npm install
```

---

## ▶️ Run Angular Application

```bash
npm start
```

Frontend will run on:

```bash
http://localhost:4200
```

---

# 🌐 API Documentation

Swagger documentation is available after running the backend:

```bash
http://localhost:3000/api-docs
```
## Swagger-UI 
<img width="2481" height="3509" alt="swagger_page-0001" src="https://github.com/user-attachments/assets/95bc99e2-e84d-41a7-96ae-aa400bfb85d5" />
<br><br>
<img width="2481" height="3509" alt="swagger_page-0002" src="https://github.com/user-attachments/assets/a09660ee-855d-43ed-983d-e7ef132e13ba" />
<br><br>
<img width="2481" height="3509" alt="swagger_page-0003" src="https://github.com/user-attachments/assets/0632cae2-6233-4c34-8039-36340d5db78c" />

---

# 🧪 Available Scripts

## Backend

```bash
npm run dev     # Run backend with nodemon
npm start       # Run backend normally
```

## Frontend

```bash
npm start       # Start Angular app
npm run build   # Build production version
npm test        # Run tests
```

---

# 📸 Figma Link of UI Design
```bash
https://www.figma.com/design/AazrIpvdBFdxDwmcJO9fWo/cinema-design-system?node-id=6-602&t=sVQm6I2INk7VaANt-0
```
---

# 📸 Figma Web Design
## Landing Page
<img width="4344" height="7278" alt="CinePremium - Landing Page" src="https://github.com/user-attachments/assets/ace18e76-fcb9-4656-930c-3a340fc9373b" />
<br><br>
## Movie Details
<img width="4320" height="7776" alt="Movie Details (1)" src="https://github.com/user-attachments/assets/892e13d7-ab41-425b-b44c-5bccd312f2d7" />
<br><br>
## User Profile
<img width="4320" height="7626" alt="My Dashboard (3)" src="https://github.com/user-attachments/assets/e53db8d7-6e32-458e-a8e1-ef90ff12b6da" />

---

# 📸 Figma Mobile Design
 Design
## Choose Seats
<img width="1206" height="6172" alt="Choose Seats" src="https://github.com/user-attachments/assets/c7a2bf3a-4440-4649-8237-9e948a1ac504" />
<br><br>
## Movie Details
<img width="1254" height="13188" alt="Browse Movies" src="https://github.com/user-attachments/assets/e23588e4-38dd-4399-a1fe-909a8504440d" />
<br><br>


---

# 👨‍💻 Team Members & Contributions

## 🙋🏻 Abdelrhman Khaled Mohamed
- Designed the UI/UX for both web and mobile versions
- Initialized the project architecture and structure
- Developed the Admin Panel with movie add/edit functionality
- Implemented API integration for admin dashboard and movie CRUD operations

---

## 🙋🏻 Mohamed EssamElDin AbdelFattah
- Developed Movie Details and Choose Seats pages
- Implemented seat availability and reservation logic
- Added dark mode support and responsive design improvements
- Contributed to Chatbot API and Show Time backend implementation

---

## 🙋🏻‍♀️ Mariam Essam Edward
- Developed the Sign In & Sign Up pages
- Implemented user CRUD operations with API integration
- Integrated chatbot request/response functionality
- Contributed to User and Hall backend implementation

---

## 🙋🏻 Mario Nady Khalaf
- Developed the Landing Page and Browse Movies pages
- Implemented movie fetching and categorization (Featured & All Movies)
- Added movie trailer integration using YouTube
- Contributed to Movie and Seats backend implementation

---

## 🙋🏻 Islam Adel Ahmed
- Developed the User Profile and Checkout pages
- Implemented profile API integration and upcoming movie data fetching
- Contributed to Booking and Payment backend implementation
- Added Swagger UI documentation for all API endpoints
---

