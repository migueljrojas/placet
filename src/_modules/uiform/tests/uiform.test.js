'use strict';

var Uiform = require('../uiform');

describe('Uiform View', function() {

  beforeEach(function() {
    this.uiform = new Uiform();
  });

  it('Should run a few assertions', function() {
    expect(this.uiform);
  });

});
