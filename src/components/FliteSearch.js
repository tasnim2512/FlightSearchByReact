import React from 'react';

import SearchForm from './SearchForm';
import TableData from './TableData';
import Header from './Header';
import FlightOPT from './FlightOPT';
import Title from './Title';


const FlightSearch = () => {
    return (
        <div className="">
            <Header />
            <Title/>
            <div className='container'>

            <FlightOPT />
            <SearchForm />

            <TableData />
            </div>
        </div>
    );
};

export default FlightSearch;
