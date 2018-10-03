$(document).ready(function(){
    $('#one-container').click(function() {
$('#word-one').animate({"left":"200%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
 
    $('#two-container').click(function() {
$('#word-two').animate({"left":"120%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
$('#word-twotwo').animate({"left":"300%"},9000,function(){$('#word-one').delay(800).fadeOut()}) 
});
    $('#three-container').click(function() {
$('#word-three').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
$('#word-threetwo').animate({"left":"300%"},8000,function(){$('#word-one').delay(800)}) 
$('#word-threethree').animate({"left":"300%"},8000,function(){$('#word-one').delay(800)}) 
});

$('#four-container').click(function() {
    $('#word-four').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
    $('#word-fourtwo').animate({"left":"150%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
    $('#word-fourthree').animate({"left":"200%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
    $('#word-fourfour').animate({"left":"500%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
$('#five-container').click(function() {
$('#word-five').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
$('#word-fivetwo').animate({"left":"600%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
$('#word-fivethree').animate({"left":"500%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
$('#word-fivefour').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
$('#word-fivefive').animate({"left":"200%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
    });
/*transform: scale(.25);*/