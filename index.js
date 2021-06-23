'use strict';

// Start up DB Server
require('dotenv').config();
const { db } = require('./src/auth/models/index.js');
const { start } = require('./src/server.js');

db.sync()
  .then(() => {

    // Start the web server
    start(process.env.PORT);
  });