console.log('hello world')

// $('document').ready(function(){
//   // Listen for click on menu toggler button
//   $('#menu-toggler').click(function() {
//     // Find menu and show it
//     $('#main-menu').slideToggle();
//   });
// });


$('document').ready(function(){
  // Listen for click on menu toggler button
  $('#menu-toggler').click(function() {
    // Open menu
    $('body').toggleClass('menu-open');
    $('#menu-toggler').toggleClass('active');
  });
});