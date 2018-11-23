'use strict';

// Constructor
var Product = function() {
    var filtersTrigger = $('.tienda__filters__button');
    var filtersWrapper = $('.tienda__filters__wrapper');
    var filtersDropTrigger = $('.tienda__filter__drop li');

    filtersTrigger.on('click', function() {
        filtersWrapper.toggleClass('-open');
    });

    filtersDropTrigger.on('click', function() {
        $(this).toggleClass('-active');
    });
};

module.exports = Product;
