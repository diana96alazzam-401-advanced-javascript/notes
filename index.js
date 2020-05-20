'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const noteInstance = new Input();
const note = new Note(noteInstance);


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if ((noteInstance.action === 'add') || (noteInstance.action === 'a')) {
  noteInstance.valid() ? note.save(noteInstance).then(mongoose.disconnect): help();
} else if ((noteInstance.action === 'list')) {
  noteInstance.valid() ? note.list(noteInstance).then(mongoose.disconnect): help();
} else if ((noteInstance.action === 'delete')) {
  noteInstance.valid() ? note.delete(noteInstance): help();
}




function help() {
  console.log(`
    Note app USAGE:
     -a <your note here>
     --add <your note here>
    `);
  process.exit();
}