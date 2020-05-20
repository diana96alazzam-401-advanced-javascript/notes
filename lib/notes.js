'use strict';

require('dotenv').config();
const DbNotes = require('./model/notes-schema.js'); 


class Note {
  constructor (note){
    this.text = note.payload;
    this.category = note.category;
  }

  async add (note) {
    const newNote = new Note(note);
    const record = new DbNotes(newNote);
    const savedNote = await record.save();
    newNote.id = savedNote.id; //maybe i need to put underscore
    console.log(`Note saved ${savedNote.text}`);
    return savedNote;  
  }

  delete(note) {
    const oneNote = DbNotes.findById(note.deleteId);
    oneNote.findOneAndRemove({_id: note.deleteId}, ()=>{
      console.log(`Deleted note ${note.deleteId}`);
      process.exit();
    });
  }

  list (note){
    console.log(note.listVal);
    if (note.listVal !== true) {
      const oneNote = DbNotes.find({category: note.listVal});
      console.log(oneNote);
      return oneNote;        
    } else {
      const oneNote = DbNotes.find({});
      console.log(oneNote);
      return oneNote;
    }
  }

}
module.exports = Note;

