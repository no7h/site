$(document).ready(function () {
    'use strict';
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('.slider').slider({full_width: true});
    $('.collapsible').collapsible({accordion : false});
    $('ul.tabs').tabs();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });
    $('select').material_select();
});

