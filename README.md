# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# RoleBoard

**RoleBoard** is a responsive, client-side admin dashboard built with **React** and **Tailwind CSS**, designed for managing user data without backend dependencies. It features a clean UI, tag-based role management, modal editing, and persistent data storage via `localStorage`.

---

## 🚀 Features

- ✅ Responsive dashboard layout with collapsible sidebar
- 🔍 Search and filter users by name, email, role, and status
- 🏷️ Role management using tag-style UI (Admin, Editor, Viewer)
- ✏️ Modal-based editing of user details
- 🗑️ Delete functionality with confirmation
- 💾 Persistent data storage using `localStorage`
- 🔢 Client-side pagination (10 users per page)
- 📱 Mobile-friendly with sidebar toggle
- 🔔 Toast notifications for save/delete actions

---

## 🧩 Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| **React**      | UI rendering and component logic |
| **Tailwind CSS** | Responsive styling and layout   |
| **Vite**       | Fast development build tool      |
| **localStorage** | Client-side data persistence    |

---

## 📦 Project Structure

roleboard/ ├── public/ ├── src/ │ ├── components/ │ │ ├── Sidebar.jsx │ │ ├── UserTable.jsx │ │ ├── UserModal.jsx │ │ ├── RoleTags.jsx │ │ └── Toast.jsx │ ├── data/ │ │ └── mockUsers.js │ ├── utils/ │ │ └── localStorage.js │ ├── App.jsx │ └── index.css ├── tailwind.config.js └── vite.config.js


