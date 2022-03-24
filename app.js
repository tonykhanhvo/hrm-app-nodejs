// Import Core Module
const path = require('path');
// Import Third Party
const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
// Import in-App Module

// Create Express App
const app = express();
// Set Template Engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// Import Route Module

// Using body-parser module
app.use(bodyParse.urlencoded({extended: false}));
// Set Static Folder (public folder)
app.use(express.static(path.join(__dirname, 'public')));
// Set Middleware
app.use('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home Page'
    });
});
// Connect Mongoose & Set app.listen
app.listen(3000);