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
    // const oneNote = DbNotes.findById(note.deleteId);
    // oneNote.findOneAndRemove({_id: note.deleteId}, ()=>{
    //   console.log(`Deleted note ${note.deleteId}`);
    //   process.exit();
    // });
    DbNotes.findByIdAndDelete(note.deleteId, ()=>{
      console.log(`Deleted note ${note.deleteId}`);
      process.exit();
    });
  }

  async list (note){
    if (note.listVal !== true) {
      const oneNote = await DbNotes.find({category: note.listVal});
      for(let i = 0; i<oneNote.length; i++){
        console.log(
          `          ${oneNote[i].text}
          Category: ${oneNote[i].category}    ID: ${oneNote[i]._id}
          ---------------------------------------------------------`);
      }
      return oneNote;   
    } else {
      const oneNote = await DbNotes.find({});
      for(let i = 0; i<oneNote.length; i++){
        console.log(
          `          ${oneNote[i].text}
          Category: ${oneNote[i].category}    ID: ${oneNote[i]._id}
          ---------------------------------------------------------`);
      }
      return oneNote;
    }
  }

}
module.exports = Note;

