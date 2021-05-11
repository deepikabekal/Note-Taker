//import packages
const express = require('express');
const fs = require ('fs');
const path = require ('path');
//const uuid = require ('uuid');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const { data } = require('../db/db.json');


//creating new note
function createNewNote(body, data) {
    const userInput = body;
    console.log(userInput);
    data.push(userInput);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify({ data })
    );
    return userInput;
    
}

//return saved notes
router.get('/notes', (req,res) => {
    //console.log("I have been hit")
        return res.json(data);
});

//create new note, save ad return
router.post('/notes', (req, res) => {
    let notes = createNewNote(req.body, data)
    res.json(data);    
});





module.exports = router;