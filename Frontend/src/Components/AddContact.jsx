import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/New', { name, email, phone });
            navigate('/');
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="bg-gray-800 shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Add Contact</h1>
                    <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Back to Contact List</a>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">New Contact</h2>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="border border-gray-600 bg-gray-700 p-2 rounded mb-4 w-full text-white"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="border border-gray-600 bg-gray-700 p-2 rounded mb-4 w-full text-white"
                    />
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        required
                        className="border border-gray-600 bg-gray-700 p-2 rounded mb-4 w-full text-white"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Add Contact</button>
                </form>
            </main>

            <footer className="bg-gray-800 shadow py-4 mt-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 My Contact Manager App</p>
                </div>
            </footer>
        </div>
    );
};

export default AddContact;
