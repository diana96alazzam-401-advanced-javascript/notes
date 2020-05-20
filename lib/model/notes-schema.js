'use strict';

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const notes = new mongoose.Schema({
  text: {type: 'string', required: true},
  category: {type: 'string', required:true},
});


module.exports.schema = notes.obj;
module.exports.model = mongoose.model('notes', notes);

