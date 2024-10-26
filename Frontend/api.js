// src/api.js
const BASE_URL = 'http://localhost:3000';

export const fetchContacts = async () => {
    const response = await fetch(`${BASE_URL}/`);
    return response.json();
};

export const createContact = async (contact) => {
    const response = await fetch(`${BASE_URL}/New`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    });
    return response.json();
};

export const updateContact = async (id, contact) => {
    const response = await fetch(`${BASE_URL}/contacts/${id}/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    });
    return response.json();
};

export const deleteContact = async (id) => {
    await fetch(`${BASE_URL}/contacts/${id}/delete`, {
        method: 'POST',
    });
};
