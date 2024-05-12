import React from 'react';

function DayPicker() {
  // Generate options from 1 to 10 plus "Day -" and "Day +"
  const options = ["Day -", "Day +", ...Array.from({ length: 10 }, (_, i) => `${i + 1}`)];
  
  return (
    <select
      className="mt-1 block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      defaultValue="Day -"  // Set the initial selection; you can manage this via React state if needed
    >
      {options.map((option, index) => (
        <option key={index} value={option} disabled={option === "Day -" || option === "Day +"}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default DayPicker;
