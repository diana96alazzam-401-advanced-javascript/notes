'use strict';

const model = require('./notes-schema.js').model;

class NotesCollection {

  constructor() {}

  async create(note) {
    const record = new model({text: note.payload, category: note.category});
    const savedNote = await record.save();
    console.log(`Note saved ${savedNote.text}`);
    return savedNote;  
  }
  
  async read(note) {
    if (note.listVal !== true) {
      const oneNote = await model.find({category: note.listVal});
      for(let i = 0; i<oneNote.length; i++){
        console.log(
          `          ${oneNote[i].text}
            Category: ${oneNote[i].category}    ID: ${oneNote[i]._id}
            ---------------------------------------------------------`);
      }
      return oneNote;   

    } else {
      const oneNote = await model.find({});
      for(let i = 0; i<oneNote.length; i++){
        console.log(
          `          ${oneNote[i].text}
            Category: ${oneNote[i].category}    ID: ${oneNote[i]._id}
            ---------------------------------------------------------`);
      }
      return oneNote;
    }
  }

  delete(note) {
    model.findByIdAndDelete(note.deleteId, ()=>{
      console.log(`Deleted note ${note.deleteId}`);
      process.exit();
    });
  }
  
}

module.exports = new NotesCollection();
