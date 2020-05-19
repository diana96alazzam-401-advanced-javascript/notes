'use strict';

// const uuidv4 = require("uuid/v4")

function Note(note) {
  this.id = Date.now();
  this.text = note.payload;
}

Note.prototype.execute = function (note) {
  if (note.action && note.payload) {
    Note.prototype.add(note);
  } else if ((!(note.action)) && (!(note.payload))) {
    console.log('ERROR: Please add valid action (-a or --add) and text');
  } else if ((!(note.action)) && (note.payload)) {
    console.log('ERROR: Please add valid action (-a or --add)');
  } else if ((note.action) && (!(note.payload))) {
    console.log('ERROR: Please add valid text');
  }
};

Note.prototype.add = function (note) {
  const newNote = new Note(note);  
  console.log(newNote, note);
  console.log(`Adding Note: ${newNote.text}`);
};

module.exports = Note;

