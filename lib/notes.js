'use strict';

class Note {
  constructor (note){
    this.id = Date.now();
    this.text = note.payload;
  }
  execute(note) {
    if (note.action && note.payload) {
      this.add(note);
    } else if ((!(note.action)) && (!(note.payload))) {
      // console.log('ERROR: Please add valid action and text');
    } else if ((!(note.action)) && (note.payload)) {
      // console.log('ERROR: Please add valid action');
    } else if ((note.action) && (!(note.payload))) {
      // console.log('ERROR: Please add valid text');
    }
  }
  add (note) {
    const newNote = new Note(note);  
    console.log(newNote);
    console.log(`Adding Note: ${newNote.text}`);
  }
}
module.exports = Note;

