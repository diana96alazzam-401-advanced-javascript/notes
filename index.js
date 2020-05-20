'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const noteInstance = new Input();
const note = new Note(noteInstance);

noteInstance.valid() ? note.execute(noteInstance): '';


/*
  I would normally do it this way
  but the submission instructions ask for nothing to be console logged when there is no command
  and it didn't specify if the user specified wrong action or payload 
*/


// noteInstance.valid() ? note.execute(noteInstance) : help();

// function help() {
//   console.log(`
//     Note app USAGE:
//      -a <your note here>
//      --add <your note here>
//     `);
//   process.exit();
// }