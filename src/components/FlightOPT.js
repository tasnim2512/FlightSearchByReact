import React from 'react';

function FlightOPT() {
    return (
        <div className="flex justify-center font-bold text-xs my-4">
            <button className="text-gray-800 border-2 border-gray-800  bg-white hover:bg-blue-300 focus:outline-none px-4 py-1 ">
                Round Trip
            </button>
            <button className="text-white bg-darkBlue2 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 px-4 py-1">
                One Way
            </button>
            <button className="text-gray-800  border-2 border-gray-800 bg-white hover:bg-blue-300 focus:outline-none px-4 py-1">
                Multi city
            </button>
        </div>
    );
}

export default FlightOPT;
