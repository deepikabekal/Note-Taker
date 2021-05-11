//import packages
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    // console.log("I have been hit html")
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



module.exports = router;