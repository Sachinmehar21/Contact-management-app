import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const res = await axios.get('http://localhost:3000');
        setContacts(res.data);
    };

    const deleteContact = async (id) => {
        await axios.post(`http://localhost:3000/contacts/${id}/delete`);
        fetchContacts();
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="bg-gray-800 shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Contact Manager</h1>
                    <Link to="/New" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Add Contact</Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <h2 className="text-xl font-semibold mb-4">Contact List</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {contacts.length > 0 ? (
                        contacts.map(contact => (
                            <div key={contact._id} className="bg-gray-800 rounded-lg shadow p-4">
                                <h3 className="text-lg font-bold">{contact.name}</h3>
                                <p className="text-gray-400">{contact.email}</p>
                                <p className="text-gray-400">{contact.phone}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <Link to={`/contacts/${contact._id}/edit`} className="text-blue-400 hover:underline">Edit</Link>
                                    <button onClick={() => deleteContact(contact._id)} className="text-red-400 hover:underline">Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-gray-800 rounded-lg shadow p-4 col-span-full">
                            <p>No contacts found.</p>
                        </div>
                    )}
                </div>
            </main>

            <footer className="bg-gray-800 shadow py-4 mt-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 My Contact Manager App</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactList;
