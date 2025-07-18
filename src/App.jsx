import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import mockUsers from "./data/mockUsers";
import Toast from "./components/Toast";
import "./App.css";

import { getUsersFromStorage, saveUsersToStorage } from "./utils/localStorage";

const App = () => {
  const [filters, setFilters] = useState({
    search: "",
    roles: [],
    status: "",
  });

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [toast, setToast] = useState(null);

  // get users from localStorage
  useEffect(() => {
    const storedUsers = getUsersFromStorage();
    if (storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      setUsers(mockUsers);
      saveUsersToStorage(mockUsers);
    }
  }, []);

  // filtering
  useEffect(() => {
    let result = [...users];

    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
    }

    if (filters.roles.length > 0) {
      result = result.filter((user) =>
        filters.roles.every((role) => user.roles.includes(role))
      );
    }

    if (filters.status) {
      result = result.filter((user) => user.status === filters.status);
    }

    setFilteredUsers(result);
  }, [filters, users]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col sm:flex-row">
      <aside className="w-full sm:w-64 bg-white shadow-md p-4 space-y-6 sm:h-screen sm:sticky top-0 sm:block z-40">
        <Sidebar filters={filters} setFilters={setFilters} />
      </aside>

      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">RoleBoard Dashboard</h1>

        <div className="bg-white shadow rounded-md p-4">
          <UserTable
            users={filteredUsers}
            setUsers={setUsers}
            showToast={showToast}
          />
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
