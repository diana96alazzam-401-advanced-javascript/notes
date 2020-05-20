'use strict';

const minimist = require('minimist');

class Input {
  constructor(){
    const argv = minimist(process.argv.slice(2));
    const inputtedKeys = Object.keys(argv);
    const payloadText = (argv.a)? (argv.a) : (argv.add);
    const categoryText = (argv.c)? (argv.c) : (argv.category);
    const listText = argv.list;
    const deleteId = argv.delete;

    if(inputtedKeys.includes('list')){
      this.action = 'list';
      this.listVal = listText;
    } else if(inputtedKeys.includes('delete')){
      this.action = 'delete';
      this.deleteId = deleteId;
    } else if ((inputtedKeys.includes('a')) || (inputtedKeys.includes('add'))){
      this.action = Object.keys(argv)[1];
      this.payload = this.getText(payloadText);
      this.categoryKey = Object.keys(argv)[2];
      this.category = this.getText(categoryText);
    }
  }

  getText (text) {
    return (text != true) ? text : undefined;
  }

  valid () {
    return ((this.action && this.payload && this.categoryKey && this.category) || (this.action) || (this.action && this.listVal) || (this.action && this.deleteId));
  }
}

module.exports = Input;
