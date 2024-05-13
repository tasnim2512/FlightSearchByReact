import React from 'react';

function Title(props) {
    return (
        <div className="w-full border-b border-gray-300 ">
            <div className='container flex justify-start py-1'>
            <h1 className='font-bold text-3xl'>{props.title}</h1>
            </div>
        </div>
    );
}

export default Title;
