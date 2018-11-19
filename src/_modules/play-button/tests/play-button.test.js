'use strict';

var PlayButton = require('../play-button');

describe('PlayButton View', function() {

  beforeEach(function() {
    this.playButton = new PlayButton();
  });

  it('Should run a few assertions', function() {
    expect(this.playButton);
  });

});
