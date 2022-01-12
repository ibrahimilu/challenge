'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const path = require('path')

// server config
const port = process.env.PORT || 3001;

// Serve static content for the app from the "public" directory in the application directory.
const publicDirPath = path.join(__dirname, '../', 'public');
app.use('/', express.static(publicDirPath));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


