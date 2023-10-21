const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const Travel = require('../models/Travel');

// * GET Ticket Info
exports.getTicket = async (req, res, next) => {
  // 1. Extract the id from the request params
  // 2. Find ticket with that id and extract the travelID
  // 3. Find the travel linked to that id
  // 4. Send STATUS 200 with ticket info, origin & destination
  const { id } = req.params;
  let ticket;
  try {
    ticket = await Ticket.findOne({ id });
  } catch (err) {}
  const { travelID } = ticket;
  let travel;
  try {
    travel = await Travel.findById(travelID);
  } catch (err) {}
  const { origin, destination } = travel;
  res.status(200).json({ ...ticket, origin, destination });
};

// * POST Create Ticket
exports.createTicket = async (req, res, next) => {
  // 1. Extract the ticket info from the request body
  // 2. Create ObjectID of the travelID
  // 3. Create Ticket & Save
  // 4. Send STATUS 201
  const { ticket: ticketInfo, travelID } = req.body;
  const ticket = new Ticket({
    ...ticketInfo,
    travelID : mongoose.Types.ObjectId(travelID),
  });
  try {
    await ticket.save();
  } catch (err) {}
  res.status(201).json({});
};
