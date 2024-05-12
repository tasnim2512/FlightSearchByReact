import React from 'react';
import flightData from '../LHR_CDG_ADT1_TYPE_1.json';

function TableData() {
    const flights = flightData.flightOffer;

    // Helper function to format date and time
    const formatDateTime = (dateTimeStr) => {
        return new Date(dateTimeStr).toLocaleString();
    };
    return (
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
                {flights.map((offer, index) => (
                    <tr className={`border-b border-gray-600 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300'}`} key={index}>
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
                                <div key={idx}>{formatDateTime(segment.arrival.at)}</div>
                            ))}
                        </td>
                        <td className='py-2'>{offer.itineraries[0].duration}</td>
                        <td className='py-2'>${offer.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableData;
