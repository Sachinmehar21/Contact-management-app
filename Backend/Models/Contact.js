const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Contacts", { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Contact schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

// Export the Contact model
module.exports = mongoose.model('Contact', contactSchema);
