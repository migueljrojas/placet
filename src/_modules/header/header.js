'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var tiendaOpen = $('[href="#tienda"]');
    var tiendaClose = $('.header__tienda__close');
    var buscarButtonForm = $('.header__menu__form');
    var buscarButton = $('[href="#buscar"]');
    var buscarInput = $('.header__menu__input');

    menuOpen.on('click', function(){
        if (!header.hasClass('-open')) {
            header.addClass('-open');
            body.addClass('-hideOverflow');
        } else if (header.hasClass('-open') || header.hasClass('-tienda_is-active')) {
            header.removeClass('-open');
            header.removeClass('-tienda_is-active');
            body.removeClass('-hideOverflow');
        }
    });

    tiendaOpen.on('click', function(){
        header.addClass('-tienda_is-active');
    });

    tiendaOpen.on('mouseenter', function(){
        header.addClass('-tienda_is-active');
    });

    tiendaClose.on('click', function(){
        header.removeClass('-tienda_is-active');
    });

        // Select all links with hashes
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    buscarButton.on('click', function(e) {
        e.preventDefault();
        buscarButtonForm.addClass('header__menu__form-open');
        buscarInput.focus();
    });

    buscarInput.on('focusout', function() {
        buscarButtonForm.removeClass('header__menu__form-open');
    });

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#buscar"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#registro"]')
    .not('[href="#login"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top + -80
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
};

module.exports = Header;
