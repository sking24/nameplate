// Intialize Lettering JS
$('h1').lettering();

// Make Backstretch Go!!
$.backstretch('/img/bg.jpg');

// Initialize Masonry
$('main').masonry({
  // options
  itemSelector: 'section',
  columnWidth: 0,
  gutter: 10,
  transitionDuration: '3s'
});