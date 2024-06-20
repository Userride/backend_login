import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorInviteForm from './DoctorInviteForm'; // Adjust the path if necessary

export default function Footer() {
    const [showInviteForm, setShowInviteForm] = useState(false);

    const handleInviteClick = () => {
        setShowInviteForm(true);
    };

    return (
        <>
            <footer className="bg-white border-y">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img
                                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                    className="mr-3 h-16"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="hover:underline">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/amitmandhana"
                                            className="hover:underline"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">
                                            Discord
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="#" className="hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <button 
                            onClick={handleInviteClick} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Doctor Invite
                        </button>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            {/* Social media links */}
                        </div>
                    </div>
                </div>
            </footer>
            {showInviteForm && <DoctorInviteForm onClose={() => setShowInviteForm(false)} />}
        </>
    );
}