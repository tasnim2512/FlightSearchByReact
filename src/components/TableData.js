import React from 'react';
import flightData from '../LHR_CDG_ADT1_TYPE_1.json';

function TableData() {
    const flights = flightData.flightOffer;
    // Implenting Function to format date as expected result

    const formatDateTime = (dateTimeStr) => {
        if (!dateTimeStr) return "--";
        const date = new Date(dateTimeStr);
        return date.toISOString().slice(0, 19);
    };
    return (
        <div>
            <h2 className='flex justify-start font-medium'>{flightData.message}</h2>
            <table className="table w-full text-sm text-gray-500 mt-6 mb-10">
                <thead>
                    <tr className=' bg-lightGray'>
                        <th className='py-4'>Flight Number</th>
                        <th className='py-4'>Aircraft</th>
                        <th className='py-4'>Class</th>
                        <th className='py-4'>Fare Basis</th>
                        <th className='py-4'>Route</th>
                        <th className='py-4'>Departure</th>
                        <th className='py-4'>Arrival</th>
                        <th className='py-4'>Duration</th>
                        <th className='py-4'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Pursing data through map */}
                    {/* Implenting logic based on index to keep the background color of each row according to expected result */}
                    {flights.map((offer, index) => (
                        <tr className={`border-b border-red-600 ${index % 2 === 0 ? 'bg-lightgray3' : 'bg-lightGray2'}`} key={index}>
                            <td className='py-2'>
                                {offer.itineraries[0].segments.map((segment, idx) => (
                                    <div key={idx}>{segment.flightNumber}</div>
                                ))}
                            </td>
                            <td className='py-2'>
                                {offer.itineraries[0].segments.map((segment, idx) => (
                                    <div key={idx}>{segment.aircraft}</div>
                                ))}
                            </td>
                            <td className='py-2'>
                                {offer.class[0].map((cls, idx) => (
                                    <div key={idx}>{cls}</div>
                                ))}
                            </td>
                            <td className='py-2'>
                                {offer.fareBasis[0].map((fare, idx) => (
                                    <div key={idx}>{fare}</div>
                                ))}
                            </td>
                            <td className='py-2'>
                                {offer.itineraries[0].segments.map((segment, idx) => (
                                    <div key={idx}>{`${segment.departure.iataCode}-${segment.arrival.iataCode}`}</div>
                                ))}
                            </td>
                            <td className='py-2'>
                                {offer.itineraries[0].segments.map((segment, idx) => (
                                    <div key={idx}>{formatDateTime(segment.departure.at)}</div>
                                ))}
                            </td>
                            <td className='py-2'>
                                {offer.itineraries[0].segments.map((segment, idx) => (
                                    <div key={idx}>
                                        {formatDateTime(segment.arrival.at)}
                                        <span className='ml-10'> --</span>
                                    </div>
                                ))}
                            </td>
                            <td className='py-2'>{offer.itineraries[0].duration}</td>
                            <td className='pt-2'>${offer.price}
                                <div className="">
                                    <button className="uppercase border px-4 py-2 rounded bg-darkBlue2 text-white text-xs">Select</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableData;
