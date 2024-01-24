const mongoose = require('mongoose');
const hotels = mongoose.Schema({
    nameHotel: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    devise: {
        type: String,
        required: true,
    },
    image:{
        type: String,
    }
});

module.exports = mongoose.model('hotels', hotels);