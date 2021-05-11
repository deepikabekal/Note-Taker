//import packages
const express = require ('express');
const router = express.Router();
const fs = require("fs");
const { notes } = require("../db/db.json");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

//function to create new notes
function createNewNote(body, notes) {
  const note = body;
  //console.log(note);
  notes.push(note);

  //sending the notes data to the json file
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

//function to delete the notes
function deleteNote(id, notes) {
  let noteStatus = false;
  let count = 0;
  while (count < notes.length || !status) {
    if (notes[count].id === id) {
      notes.splice(count, 1);
      noteStatus = true;
      fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ notes }, null, 2)
      );
    } else {
      count++;
    }
  }
}

//return saved notes
router.get("/notes", (req, res) => {
  res.json(notes);
});

//create new note, save ad return
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  let note = createNewNote(req.body, notes);
  res.json(notes);
});

//delete the selected note
router.delete("/notes/:id", (req, res) => {
  let id = req.params.id;
  deleteNote(id, notes);
  res.json(notes)
});

module.exports = router;
