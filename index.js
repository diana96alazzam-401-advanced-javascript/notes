'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const noteInstance = new Input();

Note.prototype.execute(noteInstance);
