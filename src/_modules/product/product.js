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

    //mix match
    var mixMatchLinks = $('.mix-match__look__list a');
    var mixMatchPanel = $('.mix-match__look__container--images');
    var closeButton = $('.mix-match__look__close-button');

    mixMatchLinks.on('click', function() {
        mixMatchLinks.removeClass('-active');
        $(this).addClass('-active');

        mixMatchPanel.addClass('-open');
    });

    closeButton.on('click', function() {
        mixMatchPanel.removeClass('-open');
    })
};

module.exports = Product;
