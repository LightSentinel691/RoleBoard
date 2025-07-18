import React from 'react';

const roles = ['Admin', 'Editor', 'Viewer'];
const statuses = ['Active', 'Inactive', 'Invited'];

const Sidebar = ({ filters, setFilters }) => {
  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleRoleToggle = (role) => {
    setFilters((prev) => {
      const currentRoles = prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role];
      return { ...prev, roles: currentRoles };
    });
  };

  const handleStatusChange = (e) => {
    setFilters((prev) => ({ ...prev, status: e.target.value }));
  };

  return (
    <aside className="w-full sm:w-64 bg-white shadow-md p-4 space-y-6 sm:h-screen sm:sticky top-0">
      <div>
        <h1 className='text-3xl font-bold mb-2'>RoleBoard</h1>
        <h2 className="text-lg font-semibold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search by name or email"
          value={filters.search}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Filter by Role</h2>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleToggle(role)}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.roles.includes(role)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Filter by Status</h2>
        <select
          value={filters.status}
          onChange={handleStatusChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
