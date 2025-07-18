import React from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  const bgColor =
    type === 'success'
      ? 'bg-green-500'
      : type === 'error'
      ? 'bg-red-500'
      : 'bg-gray-700';

  return (
    <div className={`fixed bottom-4 right-4 z-50`}>
      <div
        className={`${bgColor} text-white px-4 py-2 rounded shadow-md flex items-center space-x-2`}
      >
        <span>{message}</span>
        <button onClick={onClose} className="text-white font-bold">
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
