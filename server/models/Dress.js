const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    marke: { type: String, required: [true, 'Marke is required!'] },
    type: { type: String, required: [true, 'Type is required!'] },
    size: { type: String, required: [true, 'Size is required!'] },
    year: {
        type: String, required: true,
        min: [1950, 'The Year should be between 1950 and 2021'],
        max: [2021, 'The Year should be between 1950 and 2021']
    },
    city: { type: String, required: true, minLength: [4, 'The City should be at least 4 characters long'] },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'The Home Image should starts with http:// or https://.'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'Price must be positive number!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [60, 'The Property Description should be a maximum of 60 characters long']
    },
    createdAt: { type: Date, required: true },
    liked: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Dress', schema);