'use strict';

// Constructor
var Register = function() {
    var registerButton = $('[href="#registro"]');
    var loginButton = $('[href="#login"]');
    var registerBlock = $('#registro');
    var loginBlock = $('#login');
    var appoinmentCols = $('.appoinment__form__col');

    registerButton.on('click', function() {
        loginBlock.addClass('-hidden');
        registerBlock.removeClass('-hidden');
    });

    loginButton.on('click', function() {
        registerBlock.addClass('-hidden');
        loginBlock.removeClass('-hidden');
    });

    if ( $('#monthPicker').length > 0 ) {
        $('#monthPicker').monthly({
            mode: 'picker',
            target: '#date',
            startHidden: false,
            stylePast: true,
            disablePast: true,
            monthNames: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ]
        });
    }


    appoinmentCols.on('click', function() {
        appoinmentCols.removeClass('-active');
        $(this).addClass('-active');
    });
};

module.exports = Register;
