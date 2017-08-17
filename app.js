const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Define Port
const port = 3000;

mongoose.connect('mongodb://localhost/student-data-collection');
let db = mongoose.connection;

// Check db connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Route Files
const form = require('./routes/form');

// Init App
const app = express();

//Models
let student = require('./models/student');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/' , form);

// Start Server
app.listen(port, function () {
  console.log('Server started on port: '+port)
})
