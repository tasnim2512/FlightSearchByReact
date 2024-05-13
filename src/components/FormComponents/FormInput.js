import React from 'react';

function FormInput({ label, defaultValue, type = 'text' }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                defaultValue={defaultValue}
                className="w-48 mx-2 mt-1 block px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    );
}

export default FormInput;
