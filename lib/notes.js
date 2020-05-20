'use strict';

const notesCollection = require('./model/notes-collection.js'); 


class Note {
  constructor (note){
    this.text = note.payload;
    this.category = note.category;
  }

  save (note) {
    const savedNote = notesCollection.create(note);
    return savedNote;  
  }

  delete(note) {
    notesCollection.delete(note);
  }

  list (note){
    const record = notesCollection.read(note);
    return record;
  }

}
module.exports = Note;

