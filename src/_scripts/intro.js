'use strict';

// Constructor
var Intro = function() {
    var siteVisited = sessionStorage.getItem('placet');
    var intro = $('.home__intro');

    if (intro.length > 0) {
        $('body').addClass('-hideOverflow');
    }

    if (siteVisited === 'true') {
        $( document ).ready(function() {
            hideIntro();
        });
    }
    
    if (!siteVisited) {
        $('.home__intro__overlay').on('click', function() {
            sessionStorage.setItem('placet', true);
            hideIntro();
        });
    }

    function hideIntro() {
        intro.hide();
        $('body').removeClass('-hideOverflow');
    }
};

module.exports = Intro;