# Secure-It

**Secure-It** is a cybersecurity awareness platform designed to help users learn how to protect themselves online. This project was developed for our **Web Programming** and **Server-Side Programming** courses. It combines front-end learning modules, interactive quizzes, user progress tracking, and personalized recommendations to create an engaging and practical cybersecurity learning experience.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Database Setup](#database-setup)
- [Collaborators](#collaborators)
- [License](#license)

---

## Project Overview

Secure-It is built to teach everyday users the basics of cybersecurity in a simple and practical way. The platform emphasizes **human awareness**, showing how phishing, social engineering, weak passwords, and other common mistakes can compromise security.

Key aspects include:  
- Educational content with structured lessons  
- Interactive quizzes to reinforce learning  
- Progress tracking and dashboards for users  
- Personalized tool recommendations and safety goals  

---

## Features

- **Learning Page:** Contains lessons about cybersecurity concepts, online safety tips, and real-life examples.  
- **Quiz Page:** Users can test their knowledge; quiz answers are stored in the PHP/MySQL database via cPanel.  
- **Progress Page:** Displays completed lessons, user audits, recommended tools, and personalized safety goals.  
- **Profile Page:** Shows user details and learning progress.  
- **Resources Page:** Links to external videos and learning material for further enrichment.  
- **Login & Signup:** User authentication managed via Node.js backend and MySQL database.  

---

## Tech Stack

**Frontend:**  
- HTML, CSS, JavaScript (integrated in EJS templates)  
- PHP for quiz database connection  

**Backend:**  
- Node.js  
- Express.js  
- Controllers, models, and routes for handling server-side logic  

**Database:**  
- MySQL (used for Node.js backend to store users, home audits, tool recommendations, and safety goals)  
- PHP-connected MySQL database for quiz functionality  

---

## Project Structure
Secure-It/
├── public/                 # CSS, JS, images
├── views/                  # EJS templates
│   ├── Includes/           # Header, menu, footer
│   ├── index.ejs
│   ├── learn.ejs
│   └── quiz.ejs
├── controllers/            # Node.js controllers
├── models/                 # Node.js database models
├── routes/                 # Express routes
├── package.json
└── README.md

> **Note:** Do not include `node_modules/` in the repository.

---

## Installation & Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Secure-It

2. **Install Node.js dependencies:**

npm install

3. **Setup environment variables (create a .env file):**

DB_HOST=your_database_host
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
PORT=3000

4. **Start the server:**

npm start

Access the website:
Open your browser and go to http://localhost:3000

---
##Database Setup
**Node.js backend database**
- Tables: users, home_audit, tool_recommendations, safety_goals
- Database: MySQL
- Purpose: User authentication, tracking progress, storing personalized recommendations

**PHP quiz database**
- Tables: quiz_questions, quiz_results
- Connection: PHP/MySQL (hosted on cPanel)
- Purpose: Handles quiz data storage for the learning module

---
Collaborators
- Lalana Brosh
- Wassim Atrach
- Noa Prigan

