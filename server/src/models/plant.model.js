const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const plantSchema = new Schema({
    name: { type: String, require: true },

    location: { type: Date, require: true },

    characteristics: { type: String, require: true },

    images: [{ path: { type: String } }],

    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plant', plantSchema);