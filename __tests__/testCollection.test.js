'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/model/notes-collection.js');

describe('Notes collection', ()=> {
  it('create() a new note', ()=> {
    const newNote = {payload: 'new note text', category: 'testing'};
    const newSavedNote = {text: 'new note text', category: 'testing'};
    return NotesCollection.create(newNote).then((record)=> {
      Object.keys(newSavedNote).forEach(key => {
        expect(record[key]).toEqual(newSavedNote[key]);
      });
    });
  });
  
  it('read() notes from category', ()=> {
    const newNote = {payload: 'new note text', category: 'test1'};
    const expectedNote = {text: 'new note text', category: 'test1'};
    
    const newSavedNote = {text: 'new note text', category: 'test1'};
    return NotesCollection.create(newNote).then((record)=> {
      const listCommand = {listVal: record.category};
      return NotesCollection.read(listCommand).then(note=> {
        note.forEach(item => {
          Object.keys(newSavedNote).forEach(key=> {
            expect(item[key]).toEqual(expectedNote[key]);
          });
        });
      });
    });
  });
  
});
