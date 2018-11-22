'use strict';

var RelatedProducts = require('../related-products');

describe('RelatedProducts View', function() {

  beforeEach(function() {
    this.relatedProducts = new RelatedProducts();
  });

  it('Should run a few assertions', function() {
    expect(this.relatedProducts);
  });

});
