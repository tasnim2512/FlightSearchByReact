import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="bg-darkBlue text-gray-300 py-4 px-4 text-sm">
            <div className='container flex justify-between items-center'>
                <nav>
                    {/* Nav Options */}
                    <ul className="flex gap-8 font-medium">
                        <li>
                            <button className="hover:text-gray-500 focus:outline-none" >
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-500 focus:outline-none" >
                                Master Price
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-500 focus:outline-none" >
                                Custom Price
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-500 focus:outline-none" >
                                Calendar
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-500 focus:outline-none" >
                                Reports
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button aria-label="Notifications" className="focus:outline-none">
                        <BellIcon className="h-5 w-5 text-gray-400" />
                    </button>
                    <button aria-label="User Profile" className="focus:outline-none">
                        <UserCircleIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
