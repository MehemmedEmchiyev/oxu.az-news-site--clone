# Oxu.az Clone

This project is a modern clone of the popular Azerbaijani news website **oxu.az**, built using React, Redux, and a real backend infrastructure. Users can browse news articles, leave comments, like or dislike articles, and admins have access to a powerful content management panel.

## 🚀 Features

### User Side

* User registration (Sign up) and login.
* Browse news articles and view detailed pages.
* Leave comments on news articles.
* Like or dislike news articles.
* Commenting and liking require user authentication.
* Users without an account can quickly register.

### Admin Panel

* Add new news articles.
* Update or delete existing news articles.
* Manage news categories (add, delete).
* Dynamically control the homepage slider based on news articles.
* Only users with admin privileges can access this panel.

## 🛠️ Technologies

* **Frontend:** React, Redux Toolkit, Tailwind CSS, Mamba UI, MUI, Swiper Slider, React Icons
* **Backend:** Real server (REST API), Axios, Fetch API

## 📂 Project Setup

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```
2. Install the required dependencies:

   ```bash
   npm install
   ```
3. Start your backend server.
4. Run the frontend:

   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your browser to view the project.


## ℹ️ Note

The version of this project deployed on Vercel may contain news articles that do not resemble real news. This is because the backend is intended to be used as a learning task for students to practice API concepts, meaning they might add test data that doesn't reflect real-world news. We apologize for any visual discrepancies.

