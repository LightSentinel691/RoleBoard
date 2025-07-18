import React, { useState } from "react";
import RoleTags from "./RoleTags";
import UserModal from "./UserModal";
import { saveUsersToStorage } from "../utils/localStorage";

const UserTable = ({ users, setUsers, showToast }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const usersPerPage = 10;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-md">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50 text-gray-700 text-left uppercase text-xs tracking-wider">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Roles</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Last Active</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">
                <RoleTags roles={user.roles} />
              </td>
              <td className="px-6 py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : user.status === "Inactive"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-3">{formatDate(user.lastActive)}</td>
              <td className="px-6 py-3 space-x-2">
                <button
                  onClick={() => setSelectedUser(user)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination section */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Page <span className="font-medium">{currentPage}</span> of{" "}
          <span className="font-medium">{totalPages}</span>
        </p>
        <div className="space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-1.5 text-sm rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-1.5 text-sm rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-4 relative">
            <UserModal
              user={selectedUser}
              onClose={() => setSelectedUser(null)}
              onSave={(updatedList, action) => {
                setUsers(updatedList);
                saveUsersToStorage(updatedList);
                showToast(
                  action === "delete"
                    ? "User deleted successfully"
                    : "User updated successfully",
                  "success"
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
