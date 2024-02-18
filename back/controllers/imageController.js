// controllers/imageController.js
const { storeUserData } = require('../models/user'); // Import the database controller

async function processImage(req, res) {
  try {
    // Assuming req.body contains the necessary data
    const { username, faceEmbeddings, otherData } = req.body;

    // Call the storeUserData function from the database controller
    await storeUserData(username, faceEmbeddings, otherData);

    res.json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
module.exports = {
  processImage
};
