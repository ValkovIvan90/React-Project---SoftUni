const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'The Name should be at least 6 characters!'] },
    type: { type: String, required: true },
    year: {
        type: Number, required: true,
        min: [1850, 'The Year should be between 1850 and 2021'],
        max: [2021, 'The Year should be between 1850 and 2021']
    },
    city: { type: String, required: true, minLength: [4, 'The City should be at least 4 characters long'] },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'The Home Image should starts with http:// or https://.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [60, 'The Property Description should be a maximum of 60 characters long']
    },
    availablePieces: {
        type: Number, required: true, min: [0, 'The Available Pieces should be positive number (from 0 to 10)'],
        max: [10, 'The Available Pieces should be positive number (from 0 to 10)']
    },
    rented: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Housting', hostSchema);