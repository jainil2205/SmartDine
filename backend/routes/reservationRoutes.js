const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const authMiddleware = require('../middleware/auth');

// Create a reservation
router.post('/add', authMiddleware, async (req, res) => {
    try {
        const { seatingType, date, numberOfDiners, occasion, time, specialRequests,firstName, lastName, email, phoneNumber, agreedToPolicy } = req.body;

        const reservation = new Reservation({
            userId: req.user._id,
            seatingType,
            date,
            numberOfDiners,
            occasion,
            time,
            firstName,
            lastName,
            email,
            phoneNumber,
            specialRequests,
            agreedToPolicy
        });

        await reservation.save();
        res.status(201).json({ success: true, reservation });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// Get all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json({ success: true, reservations });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
