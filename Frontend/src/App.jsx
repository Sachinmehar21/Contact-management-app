import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/New" element={<AddContact />} />
                <Route path="/contacts/:id/edit" element={<EditContact />} />
            </Routes>
        </div>
    );
};

export default App;
