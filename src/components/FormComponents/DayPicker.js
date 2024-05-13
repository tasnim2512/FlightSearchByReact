import React from 'react';

function DayPicker({ defaultValue }) {
  // Filter out the option that is not  default
  const options = ["Day -", "Day +"].filter(option => option === defaultValue)
    .concat(Array.from({ length: 10 }, (_, i) => `${i + 1}`));

  return (
    <select className="mt-1 block w-20 mx-2 px-3 py-2 border border-gray-600 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      defaultValue={defaultValue}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default DayPicker;
