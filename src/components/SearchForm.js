import React from 'react';
import FormInput from './FormComponents/FormInput';
import Dropdown from './FormComponents/Dropdown';
import DayPicker from './FormComponents/DayPicker';
import EnvOPT from './FormComponents/EnvOPT';
import FlightOPT from './FormComponents/FlightOPT';

function SearchForm() {
    const passengerOptions = ["ADT", "CHLD"];
    const timeOptions = ["Any time", "Morning", "Afternoon", "Evening", "Night"];
    return (
        <div className="">
            {/* Form for search the flight */}
            <form className="">

                {/* Flight Option*/}
                <FlightOPT />

                <div className='w-full border-t border-b border-blue-600 py-4 flex flex-wrap items-center'>
                    <FormInput defaultValue="LHR" />
                    <FormInput defaultValue="CDG" />
                    <FormInput type="date" defaultValue="2022-12-22" />
                    <DayPicker defaultValue="Day -" />
                    <DayPicker defaultValue="Day +" />
                    <Dropdown width="120px" options={timeOptions} />
                    <button className='mx-2'> + </button>
                    <Dropdown width="80px" options={passengerOptions} />
                    <Dropdown width="80px" options={Array.from({ length: 10 }, (_, i) => `${i + 1}`)} />
                    <button className='mx-2'> + </button>
                </div>
            </form>
            <div className='border-b border-blue-600 py-4 flex flex-wrap justify-between w-full font-medium'>
                <div className="flex items-center">
                    <input type="checkbox" />
                    <label htmlFor="extraOptions" className="ml-2 text-sm font-medium text-gray-900">
                        Extra Options
                    </label>
                </div>

                {/* Environemnt Option*/}
                <EnvOPT />

                <div className="flex gap-2">
                    <button className="uppercase border px-4 py-2 rounded bg-darkBlue2 text-white text-xs">Search</button>
                </div>
            </div>

        </div>
    );
}

export default SearchForm;
