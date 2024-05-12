import React from 'react';

function EnvOPT() {
    return (
        <div className="flex items-center">
            <label className="text-gray-700 font-medium mr-4">Environment</label>
            <div className="flex items-center mr-2">
                <input 
                    type="radio" 
                    name="environment" 
                    value="Dummy" 
                    id="dummy" 
                    className="text-blue-600 focus:ring-blue-500" 
                    defaultChecked 
                />
                <label htmlFor="dummy" className="ml-2 text-sm font-medium text-gray-900">Dummy</label>
            </div>
            <div className="flex items-center">
                <input 
                    type="radio" 
                    name="environment" 
                    value="PDT" 
                    id="pdt" 
                    className="text-blue-600 focus:ring-blue-500" 
                />
                <label htmlFor="pdt" className="ml-2 text-sm font-medium text-gray-900">PDT</label>
            </div>
        </div>
    );
}

export default EnvOPT;
