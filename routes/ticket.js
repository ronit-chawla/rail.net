const express = require('express');
const {
  getTicket,
  createTicket,
} = require('../controllers/ticket');

const router = express.Router();

// GET A ticket
router.get('/:id', getTicket);
// POST Create a ticket
router.post('/', createTicket);

module.exports = router;
