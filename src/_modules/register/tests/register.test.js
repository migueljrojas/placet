'use strict';

var Register = require('../register');

describe('Register View', function() {

  beforeEach(function() {
    this.register = new Register();
  });

  it('Should run a few assertions', function() {
    expect(this.register);
  });

});
