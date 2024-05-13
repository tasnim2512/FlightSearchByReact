import React from 'react';

import SearchForm from './SearchForm';
import TableData from './TableData';
import Header from './Header';
import Title from './Title';


const FlightSearch = () => {
    return (
        <div className="">
            <Header />
             {/* Dynamically rendering the titlel */}
            <Title title="Master Price" />
            <div className='container'>
                <SearchForm />
                <TableData />
            </div>
        </div>
    );
};

export default FlightSearch;
