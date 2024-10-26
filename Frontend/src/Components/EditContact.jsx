import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditContact = () => {
    const [contact, setContact] = useState({ name: '', email: '', phone: '' });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/contacts/${id}/edit`);
                setContact(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contact:', error);
                setLoading(false);
            }
        };
        fetchContact();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/contacts/${id}/edit`, contact);
            navigate('/');
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="bg-gray-800 shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Edit Contact</h1>
                    <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Back to Contact List</a>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Edit Contact</h2>
                    <input
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        placeholder="Name"
                        required
                        className="border border-gray-600 bg-gray-700 p-2 rounded mb-4 w-full text-white"
                    />
                    <input
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        placeholder="Email"
                        required
                        className="border border-gray-600 bg-gray-700 p-2 rounded mb-4 w-full text-white"
                    />
                    <input
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        placeholder="Phone"
                        required
                        className="border border-gray-600 bg-gray-700 p-2 rounded mb-4 w-full text-white"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Update Contact</button>
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

export default EditContact;
