import React from 'react';

function Dropdown({ label, options, defaultValue, disabled = false, width = "px" }) {
  return (
    <div className=''>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 block mx-2 px-3 py-2 border border-gray-600 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ width }} 
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;