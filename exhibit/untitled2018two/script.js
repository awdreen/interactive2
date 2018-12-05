$(document).ready(function(){

  // store the width of the window
  var winWidth = $(window).width();
  var winHeight = $(window).height();

  // get a random number between 0 and the width of the window
  var leftPos = Math.floor((Math.random() * winWidth) + 1);
  var topPos = Math.floor((Math.random() * winHeight) + 1);
    
  // position the #untitled div, left in a random value
  $('#untitled').css('left', leftPos);
  $('#untitled').css('top', topPos);
  
  var leftPos2 = Math.floor((Math.random() * winWidth) + 1);
  var topPos2 = Math.floor((Math.random() * winHeight) + 1);
    
  // position the #untitled div, left in a random value
  $('#explosion').css('left', leftPos2);
  $('#explosion').css('top', topPos2);
  
  var leftPos3 = Math.floor((Math.random() * winWidth) + 1);
  var topPos3 = Math.floor((Math.random() * winHeight) + 1);
    
  // position the #untitled div, left in a random value
  $('#about').css('left', leftPos3);
  $('#about').css('top', topPos3);
  
  $('.invisible').mouseover(function(){
    $('body').addClass('show-text');
  });
  
  $('button').click(function(){
    $('body').removeClass('show-text');
  });

});