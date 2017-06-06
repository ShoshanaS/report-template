$('document').ready(function(){
  // Listen for click on menu toggler button
  $('#menu-toggler').click(function() {
    // Tag the body with open menu class
    // Subsequent styling for that is defined in CSS
    $('body').toggleClass('menu-open');
  });
});

