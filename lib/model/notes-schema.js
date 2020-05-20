'use strict';
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const notes = new mongoose.Schema({
  text: {type: 'string', required: true},
  category: {type: 'string', required:true},
});

module.exports = mongoose.model('notes', notes);
