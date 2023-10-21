const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const Travel = require('../models/Travel');
const Request = require('../models/Request');

// * GET Travel Info
exports.getTravel = async (req, res, next) => {
  // 1. Extract ID from the request params
  // 2. Find the travel from that id
  // 3. Send STATUS 200 with travel details
  const { id } = req.params;
  let travel;
  try {
    travel = await Travel.findOne({ id });
  } catch (err) {}
  res.status(200).json({ train: travel });
};

// * GET Travel Services
exports.getServices = async (req, res, next) => {
  // 1. Extract ID from the request params
  // 2. Find the travel from that id
  // 3. Populate the services field
  // 4. Send STATUS 200 with the services
  const { id } = req.params;
  let travel;
  try {
    travel = await Travel.findOne({ id });
    await travel.populate('onboardServices');
  } catch (err) {}
  res
    .status(200)
    .json({ services: travel.onboardServices });
};

// * POST Request a Service
exports.requestService = async (req, res, next) => {
  // 1. Extract travelID from request params and ticketID, type of service from the request body
  // 2. Find ticket from that id and extract the seat num and name
  // 3. Create request with travelID, ticketID, type, seat and name
  // 4. Send STATUS 201
  const { id: travelID } = req.params;
  const { ticketID, type } = req.body;
  let ticket;
  try {
    ticket = await Ticket.findOne({ id });
  } catch (err) {}
  const { seat, name } = ticket;
  const request = new Request({
    ticketID,
    type,
    seat,
    name,
    travelID : mongoose.Types.ObjectId(travelID),
  });
  try {
    await request.save();
  } catch (err) {}
  res.status(201).json({});
};
