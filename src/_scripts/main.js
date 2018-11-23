// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var Register = require('../_modules/register/register');
var EgModal = require('../_modules/eg-modal/eg-modal');
var Multirange = require('../_modules/multirange/multirange');
var Price = require('../_modules/multirange/price');
var QuantitySelector = require('../_modules/quantity-selector/quantity-selector');
var Product = require('../_modules/product/product');
var Intro = require('./intro');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new Register();
    new EgModal();
    new Multirange();
    new Price();
    new QuantitySelector();
    new Product();
    new Intro();
});
