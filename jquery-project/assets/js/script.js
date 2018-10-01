$(document).ready(function(){
    $('#one-container').click(function() {
$('#word-one').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
 
    $('#two-container').click(function() {
$('#word-two').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
    $('#three-container').click(function() {
$('#word-three').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
    $('#four-container').click(function() {
$('#word-four').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
    $('#five-container').click(function() {
$('#word-five').animate({"left":"100%"},8000,function(){$('#word-one').delay(800).fadeOut()}) 
});
    });
/*transform: scale(.25);*/