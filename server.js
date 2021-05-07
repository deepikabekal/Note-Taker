//import express package
const express = require ('express');

//instantiate server
const app = express();

//declare PORT
const PORT = process.env.PORT || 3001;

//make the server listen
app.listen (PORT, () => {
    console.log("Server is now on PORT 3001!");
});

