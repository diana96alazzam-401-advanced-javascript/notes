'use strict';
const Note = require('../lib/notes.js');


jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('does nothing when no command is given', ()=> {
    const noteInstance = {};
    const note = new Note(noteInstance);
    note.execute(noteInstance);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('logs the note and add it when execute() is called with valid action and payload', ()=> {
    const noteInstance = {action:'a' , payload: 'hey friend'};
    const note = new Note(noteInstance);
    note.execute(noteInstance);
    expect(console.log).toHaveBeenCalled();
  });
});

