

# Static Admin Login SPA – Documentation

## Aim / Objectives

1. Build a single page application (SPA) for static admin login.
2. Allow admin to access a user dashboard after login.
3. Enable basic user management: add, update, and delete users (with alert messages).
4. Navigate to a registration form for adding users.
5. After registration or editing, return to the users dashboard.

---

## What is a Single Page Application (SPA)?

- An SPA is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app.
- SPAs are built using frameworks like React, Angular, or Vue.
- They provide a smooth, fast user experience by updating only the necessary parts of the page—no full reloads.
- Key features:
  - Dynamic content/UI
  - Client-side rendering and routing
  - DOM and state manipulation
  - API calls for server communication
  - Fast loading and navigation

---

## Project Setup

**Steps to create this project:**

1. Create a new folder for your project.
2. Open a terminal in that folder.
3. Run `npm create vite@latest`
   - Choose your project name
   - Select React as the framework
   - Choose JavaScript as the variant
4. Navigate into your project folder: `cd project_name`
5. Install dependencies:
   - `npm install`
   - `npm install bootstrap`
   - `npm install react-router-dom`
   - `npm install axios`
6. Start the development server: `npm run dev`

**Main files/folders:**
- `src/` folder contains all source code.
- `Components/` folder inside `src/` contains:
  - `Login.jsx`
  - `UsersDashboard.jsx`
  - `Registration.jsx`
  - `EditUser.jsx`

---

## Component Overview

### **Login.jsx**
- Renders a static admin login form.
- Uses `useRef` to get username and password.
- Only allows login if username is `admin` and password is `admin@123`.
- On successful login, navigates to the dashboard.
- On failure, shows an alert.

### **UsersDashboard.jsx**
- Fetches and displays a list of users from JSONPlaceholder API.
- Shows users in a table with Edit and Delete options.
- "Add User" button navigates to the registration form.
- Delete button removes a user after confirmation (UI only; API is mock).
- Edit button navigates to the edit user form.

### **Registration.jsx**
- Displays a form to add a new user (name, username, phone, email).
- On submit, creates a user object and simulates a POST request.
- Shows a success alert and navigates back to the dashboard.

### **EditUser.jsx**
- Fetches user details by ID and pre-fills the edit form.
- Allows updating user info (name, username, phone, email).
- On submit, simulates a PUT request and navigates back to the dashboard with a success alert.

---

## Routing

- `/` → Login page
- `/dashboard` → Users Dashboard
- `/dashboard/addUser` → Registration form
- `/dashboard/edit/:id` → Edit user form

---

## How the App Works

1. **Login:**  
   Enter the static admin credentials to access the dashboard.
2. **Dashboard:**  
   See all users in a table. Add, edit, or delete users using the buttons.
3. **Add User:**  
   Fill out the registration form. On submit, user is (simulated) added and you return to the dashboard.
4. **Edit User:**  
   Click "Edit" next to a user. Update their info and submit to return to the dashboard.
5. **Delete User:**  
   Click "Delete" and confirm to remove a user from the table (simulated).

---

## Notes & Limitations

- **API:** Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock API. Add, edit, and delete operations are simulated in the UI—changes will not persist after a page reload.
- **Authentication:** Login is static and not secure. No sessions or real authentication are implemented.
- **State:** User list is fetched from the API on dashboard load. New or edited users are not merged into the list after navigation (for demo purposes).
- **No advanced state management** (like Redux or Context) is used.
- **Bootstrap** is used for basic styling and responsive layout.

---

## How to Run

1. Clone the repo and navigate to the project folder.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and go to the local server address (usually `http://localhost:5173/`).

---

## Sample Admin Credentials

- **Username:** admin
- **Password:** admin@123

---

## Project Folder Structure

```
src/
│
├── App.jsx
├── main.jsx
├── Components/
│   ├── Login.jsx
│   ├── UsersDashboard.jsx
│   ├── Registration.jsx
│   └── EditUser.jsx
├── App.css
└── index.css
```

---

## Additional Notes

- This project is for learning and demonstration only.
- For real-world use, replace static login with secure authentication and connect to a real backend.

---

**Thank you for checking out my first React SPA project!**

