//import packages
const express = require ('express');
const path = require ('path');

//instantiate server
const app = express();

//declare PORT
const PORT = process.env.PORT || 3001;

//creating a static folder
app.use(express.static(path.join(__dirname, 'public')));


//make the server listen
app.listen (PORT, () => {
    console.log("Server is now on PORT 3001!");
});

