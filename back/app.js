const express = require('express');
const connectDB = require('./db'); // Adjust the path accordingly
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
const port = 5000;
// Middleware for parsing JSON
app.use(bodyParser.json());

// Use the routes defined in the separate routes module
app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
