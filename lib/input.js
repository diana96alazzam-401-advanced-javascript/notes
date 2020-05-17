'use strict'

const minimist = require('minimist');

function Input() {
    const argv = minimist(process.argv.slice(2));
    const payloadText = (argv.a)? (argv.a) : (argv.add);
    this.action = this.checkAction(Object.keys(argv)[1]);
    this.payload = this.checkPayload(payloadText);
}

Input.prototype.checkAction = function (action) {
    const vaildActions = /a|add/i;
    return (vaildActions.test(action)) ? action : undefined;
}
Input.prototype.checkPayload = function (payloadText) {
    return (payloadText != true) ? payloadText : undefined;
}

module.exports = Input;
