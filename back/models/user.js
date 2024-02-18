// controllers/dbController.js
const { connectDB } = require('../db'); // Import the database connection module

async function storeUserData(username, faceEmbeddings, otherData) {
  const db = await connectDB();

  const usersCollection = db.collection('users'); // Make sure you have a 'users' collection

  try {
    const newUser = {
      username: username,
      faceEmbeddings: faceEmbeddings,
      otherData: otherData
    };

    const result = await usersCollection.insertOne(newUser);

    console.log(`User data stored successfully. Document ID: ${result.insertedId}`);
  } catch (err) {
    console.error('Error storing user data:', err);
  }
}

module.exports = {
  storeUserData
};

