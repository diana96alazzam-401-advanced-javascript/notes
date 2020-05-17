'use strict'

// const uuidv4 = require("uuid/v4")

function Note(note) {
    this.id = Date.now();
    this.text = note.payload;
}

Note.prototype.execute = function (note) {
    if (note.action && note.payload) {
        Note.prototype.add(note);
    } else if (!(note.action) && !(note.payload)) {
        console.log('Please add valid action and text');
    } else if (!(note.action) && (note.payload)) {
        console.log('Please add valid action');
    } else if ((note.action) && !(note.payload)) {
        console.log('Please add valid text');
    }
}

Note.prototype.add = function (note) {
    const newNote = new Note(note);  
    console.log(newNote);
    console.log(`Adding Note: ${newNote.text}`)
}

module.exports = Note;

