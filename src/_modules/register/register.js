'use strict';

// Constructor
var Register = function() {
    var registerButton = $('[href="#registro"]');
    var loginButton = $('[href="#login"]');
    var registerBlock = $('#registro');
    var loginBlock = $('#login');

    registerButton.on('click', function() {
        // e.preventDefault();
        loginBlock.addClass('-hidden');
        registerBlock.removeClass('-hidden');
    });

    loginButton.on('click', function() {
        // e.preventDefault();
        registerBlock.addClass('-hidden');
        loginBlock.removeClass('-hidden');
    });
};

module.exports = Register;
