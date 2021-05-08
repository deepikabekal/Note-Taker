//import packages
const express = require('express');
const router = express.Router();
const data = require('../db/db.json');

//return saved notes
router.get('/', (req,res) => {
    data
    .getNotes()
    .then(notes => {
        return res.json(notes);
    })
    .catch (err => {
        res.status(400).json(err);
    });

});

//create new note, save ad return
router.post('/api/notes', (req, res) => {
    data
    .saveNote(req.body)
    .then(note => {
        res.json(note);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

module.exports = router;