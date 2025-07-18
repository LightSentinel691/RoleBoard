import React from 'react';

const RoleTags = ({ roles }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {roles.map((role) => (
        <span
          key={role}
          className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
        >
          {role}
        </span>
      ))}
    </div>
  );
};

export default RoleTags;
