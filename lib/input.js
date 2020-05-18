'use strict';

const minimist = require('minimist');

class Input {
  constructor(){
    const argv = minimist(process.argv.slice(2));
    const payloadText = (argv.a)? (argv.a) : (argv.add);
    this.action = this.getAction(Object.keys(argv)[1]);
    this.payload = this.getPayload(payloadText);      
  }
  getAction (action) {
    const vaildActions = /(^a$)|(^add$)/i;
    return (vaildActions.test(action)) ? action : undefined;
  }
  getPayload (payloadText) {
    return (payloadText != true) ? payloadText : undefined;
  }
  valid () {
    return (this.action && this.payload);
  }
}

module.exports = Input;
