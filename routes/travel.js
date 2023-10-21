const express = require('express');
const { getTravel } = require('../controllers/travel');

const router = express.Router();

// GET Travel Infor
router.get('/:id', getTravel);

module.exports = router;
