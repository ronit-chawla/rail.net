const express = require('express');
const {
  getTravel,
  getServices,
  requestService,
  requestPorter,
  getRequests,
  getPorterRequests,
  createTravel,
  createService,
} = require('../controllers/travel');

const router = express.Router();

// GET Travel Info
router.post('/service', createService);
// GET Travel Info
router.get('/:id', getTravel);
// POST Create Travel
router.post('/', createTravel);
// GET Travel Services
router.get('/:id/services', getServices);
// POST request service
router.post('/:id', requestService);
// POST request porter
router.post('/:id/porter', requestPorter);
// GET requests
router.get('/:id/requests', getRequests);
// GET Porter Requests
router.get('/:id/porter/requests', getPorterRequests);

module.exports = router;
