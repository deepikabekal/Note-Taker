//import packages
const express = require('express');
const router = express.Router();
const data = require('../db/db.json');

//create new note, save ad return
router.post('/notes', (req, res) => {
    return res.json(req.body);  
});

//return saved notes
router.get('/notes', (req,res) => {
    //console.log("I have been hit")
        return res.json(data);
});



module.exports = router;