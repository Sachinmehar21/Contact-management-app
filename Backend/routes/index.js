const express = require('express');
const router = express.Router();
const Contact = require("../Models/Contact");

// GET all contacts
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts); // Send contacts as JSON
});

// POST Create New Contact
router.post('/New', async (req, res) => {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(201).json(newContact); // Respond with the created contact
});

// GET Edit Contact (fetch details)
router.get('/contacts/:id/edit', async (req, res) => {
    const { id } = req.params;
    const contact = await Contact.findById(id); // Assuming you are using MongoDB
    if (!contact) {
        return res.status(404).send('Contact not found');
    }
    res.json(contact); // Ensure the response is in JSON format
});

// POST Update Contact
router.post('/contacts/:id/edit', async (req, res) => {
    const { name, email, phone } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, { name, email, phone }, { new: true });
    if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(updatedContact); // Respond with the updated contact
});

// POST Delete Contact
router.post('/contacts/:id/delete', async (req, res) => {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(204).send(); // Send a 204 No Content status
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Contact = require("../Models/Contact");

// // GET home page (List Contacts)
// router.get('/', async (req, res) => {
//     const contacts = await Contact.find();
//     res.render('index', { title: 'Contact Manager', contacts });
// });

// // GET New Contact Page
// router.get('/New', (req, res) => {
//     res.render('New', { title: 'Add New Contact' });
// });

// // POST Create New Contact
// router.post('/New', async (req, res) => {
//     const { name, email, phone } = req.body;
//     const newContact = new Contact({ name, email, phone });
//     await newContact.save();
//     res.redirect('/'); // Redirect to the contacts list
// });

// // GET Edit Contact Page
// router.get('/contacts/:id/edit', async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     res.render('Edit', { title: 'Edit Contact', contact });
// });

// // POST Update Contact
// router.post('/contacts/:id/edit', async (req, res) => {
//     const { name, email, phone } = req.body;
//     await Contact.findByIdAndUpdate(req.params.id, { name, email, phone });
//     res.redirect('/');
// });

// // POST Delete Contact
// router.post('/contacts/:id/delete', async (req, res) => {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.redirect('/');
// });

// module.exports = router;
