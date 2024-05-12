import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="bg-darkBlue text-gray-300 py-4 px-4 text-sm">
            <div className='container flex justify-between items-center'>
                <nav>
                    {/* Nav Options */}
                    <ul className="flex gap-8">
                        <li><a href="" className="hover:text-gray-500">Dashboard</a></li>
                        <li><a href="#" className="hover:text-gray-500">Master Price</a></li>
                        <li><a href="" className="hover:text-gray-500">Custom Price</a></li>
                        <li><a href="" className="hover:text-gray-500">Calendar</a></li>
                        <li><a href="" className="hover:text-gray-500">Reports</a></li>
                    </ul>
                </nav>
                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button aria-label="Notifications">
                        <BellIcon className="h-4 w-4 " />
                    </button>
                    <button aria-label="User Profile">
                        <UserCircleIcon className="h-6 w-6 " />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
