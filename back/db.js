const { MongoClient } = require('mongodb');

const url = "mongodb+srv://imen:D9Nx496irCTU6Ru2@cluster0.jpt0czq.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'gym';

const user = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await user.connect();
    console.log('Connected to the database');
    return user.db(dbName);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

module.exports = {
  connectDB
};
