//import packages
const express = require ('express');
const path = require ('path');

//instantiate server
const app = express();

//creating a static folder
app.use(express.static('public'));

//API Routes
app.use('/api', require('./routes/api_routes'));

//html routes
app.use('/', require("./routes/html_routes"));

//body parser middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//declare PORT
const PORT = process.env.PORT || 3001;

//make the server listen
app.listen (PORT, () => {
    console.log("Server is now on PORT 3001!");
});

