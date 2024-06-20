import React, { useState } from 'react';

export default function DoctorInviteForm({ onClose }) {
    const [doctorName, setDoctorName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:amitmandhana1@gmail.com?subject=Doctor Invite&body=Doctor Name: ${doctorName}%0ASpeciality: ${speciality}%0AContact Number: ${contactNumber}`;
        window.location.href = mailtoLink;
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Invite a Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Doctor Name</label>
                        <input 
                            type="text" 
                            value={doctorName} 
                            onChange={(e) => setDoctorName(e.target.value)} 
                            className="w-full px-3 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Speciality</label>
                        <input 
                            type="text" 
                            value={speciality} 
                            onChange={(e) => setSpeciality(e.target.value)} 
                            className="w-full px-3 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contact Number</label>
                        <input 
                            type="tel" 
                            value={contactNumber} 
                            onChange={(e) => setContactNumber(e.target.value)} 
                            className="w-full px-3 py-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
