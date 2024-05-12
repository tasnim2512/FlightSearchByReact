import React from 'react';
import FormInput from './FormInput';
import Dropdown from './Dropdown';
import DayPicker from './DayPicker';
import EnvOPT from './EnvOPT';

function SearchForm() {
    const passengerOptions = ["Adult", "Child"];
    const timeOptions = ["Any time", "Morning", "Afternoon", "Evening", "Night"];
    return (
        <div className="">
            <form className="">
                <div className='border-t border-b border-blue-600 py-4 flex flex-wrap gap-8'>
                    <FormInput defaultValue="LHR" />
                    <FormInput defaultValue="CDG" />
                    <FormInput type="date" defaultValue="2022-12-22" />
                    <DayPicker />
                    <DayPicker />
                    <Dropdown options={timeOptions} />
                    <Dropdown options={passengerOptions} />
                    <Dropdown options={Array.from({ length: 10 }, (_, i) => `${i + 1}`)} />
                </div>
            </form>
            <div className='border-b border-blue-600 py-4 flex flex-wrap justify-between w-full font-medium'>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                    />
                    <label htmlFor="extraOptions" className="ml-2 text-sm font-medium text-gray-900">
                        Extra Options
                    </label>
                </div>

                <EnvOPT />
                <div className="flex gap-2">
                    <button className="uppercase border px-4 py-2 rounded bg-darkBlue2 text-white text-xs">Search</button>
                </div>
            </div>

        </div>
    );
}

export default SearchForm;
