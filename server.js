//import packages
const express = require('express');
const app = express(); //instantiate server

//declaring variables
const PORT = process.env.PORT || 80;
const apiRoutes = require('./routes/api_Routes');
const htmlRoutes = require('./routes/html_Routes');

//body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//creating a static folder
app.use(express.static('public')); 


app.use('/api', apiRoutes); //API Routes
app.use('/', htmlRoutes); //html routes

//make the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });