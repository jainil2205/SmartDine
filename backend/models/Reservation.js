const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    seatingType: String,
    date: Date,
    numberOfDiners: Number,
    occasion: String,
    time: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    specialRequests: String,
    agreedToPolicy: Boolean
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
