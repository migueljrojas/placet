'use strict';

// Constructor
var QuantitySelector = function() {
    var selector = $('.quantity-selector__value');
    var leftArrow = $('.quantity-selector__left-arrow');
    var rightArrow = $('.quantity-selector__right-arrow');
    var promotionalCode = $('.carro-de-compras__cta__input');

    promotionalCode.on('click', function() {
        console.log('hola');
        $(this).removeAttr("disabled");
    });


    leftArrow.on('click', function(e) {
        e.preventDefault();
        var initialValue = selector.html();
        var number = parseInt(initialValue);

        if (number == 1) {

        } else {
            var finalValue = (number - 1);
            return selector.html(finalValue);
        };
    });

    rightArrow.on('click', function(e) {
        e.preventDefault();
        var initialValue = selector.html();
        var number = parseInt(initialValue);
        var finalValue = number + 1;
        return selector.html(finalValue);
    });
};

module.exports = QuantitySelector;
