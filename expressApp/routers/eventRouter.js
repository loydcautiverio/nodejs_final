const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/event/:id', eventController.getEventById);
router.post('/', eventController.validate('insertEvent'), eventController.insertEvent);
router.put('/event/:id', eventController.validate('updateEvent'), eventController.updateEvent);
router.delete('/event/:id', eventController.deleteEvent);
router.get('/search/', eventController.getEventsByNameAndDate);
router.get('/export/', eventController.exportByEventId);

module.exports = router;
