// routes.js
const express = require('express');
const router = express.Router();
const imageController = require('./controllers/imageController'); // Import your controller module

// Route for processing uploaded image and storing data in MongoDB
router.post('/process-image', imageController.processImage);

module.exports = router;
