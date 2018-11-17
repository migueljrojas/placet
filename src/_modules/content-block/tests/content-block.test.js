'use strict';

var ContentBlock = require('../content-block');

describe('ContentBlock View', function() {

  beforeEach(function() {
    this.contentBlock = new ContentBlock();
  });

  it('Should run a few assertions', function() {
    expect(this.contentBlock);
  });

});
