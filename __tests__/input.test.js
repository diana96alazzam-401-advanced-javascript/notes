'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(()=> {
  return {
    a: 'hello friend',
  };
});

describe('INPUT MODULE', () => {

  describe('Valid()', ()=> {
    it('valid action and payload', () => {
      const noteInstance = new Input();
      noteInstance.action = 'a'|| 'add';
      noteInstance.payload = 'hello friend';
      expect(noteInstance.valid()).toBeTruthy();
    });
    it('invalid action', () => {
      const noteInstance = new Input();
      noteInstance.action = undefined;
      expect(noteInstance.valid()).toBeFalsy();
    });
    it('invalid payload', () => {
      const noteInstance = new Input();
      noteInstance.payload = undefined;
      expect(noteInstance.valid()).toBeFalsy();
    });
    it('invalid action and payload', () => {
      const noteInstance = new Input();
      noteInstance.action = undefined;
      noteInstance.payload = undefined;
      expect(noteInstance.valid()).toBeFalsy();
    });
  });

});
