'use strict';

var LookBlock = require('../look-block');

describe('LookBlock View', function() {

  beforeEach(function() {
    this.lookBlock = new LookBlock();
  });

  it('Should run a few assertions', function() {
    expect(this.lookBlock);
  });

});
