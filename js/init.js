$(document).ready(function(){
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
        selectYears: 15,
    });
    $('select').material_select();
     $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
});
