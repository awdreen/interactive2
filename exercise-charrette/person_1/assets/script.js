$(document).ready(function(){
	
$('#button-3').click(function() {
		$(this).animate({
			opacity: .5,
			
			fontSize: '10px',
			height: '10px',
			width: '10px',
			borderWidth: '10px'
		}, 200 );
	});

$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-14').click(function() {
		$(this).next('.item').toggleClass('circle');
	});


	// check when the mouse moves
// $('#button-6').mousemove(function(e){
		
		// update mouse x and y position
//		var xPos = e.pageX-125;
//		var yPos = e.pageY-125;
//
//		$(this).css({
//			'position' : 'absolute',
//			'top' :  yPos+'px',
//			'left' :  xPos+'px',
//		});
//	});
	$('#button-6').click('click touchstart', function() {
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.8'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.6'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.6'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.8'}, 200);
		$(this).animate({opacity: '1'}, 200);

	});
	$('#button-7').click('click touchstart', function() {
		$(this).animate({height: '20px'}, 600);
		$(this).animate({height: '250'}, 800);

	});
	$('#button-9').click(function() {

    	$('#button-1').each(function(index) {
      	var colorR = Math.floor((Math.random() * 256));
      	var colorG = Math.floor((Math.random() * 256));
      	var colorB = Math.floor((Math.random() * 256));
      	$(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    	});
  });
	var button10= true;
	$('#button-10').click(function() {
		if (button10==true) {
    	 	$("#twentythree").css("transform", "rotate(90deg)");
    	 	button10=false;
    	}
		else {
            $("#twentythree").css("transform", "rotate(0deg)");
            button10=true;
        }
	});  
	$('#button-11').click('click touchstart', function() {
		$(this).animate({height: '500px'}, 600);
		$(this).animate({width: '500px'}, 600);
		$(this).animate({height: '250'}, 800);
		$(this).animate({width: '250'}, 800);

	});
		$('#button-13').click('click touchstart', function() {
		$(this).animate({opacity: '0'}, 100);

	});
			$('#littlebox').click('click touchstart', function() {
		$(this).animate({left: '203'}, 800);
		$(this).animate({opacity: '0'}, 1000);

	});
	$('#button-15').click('click touchstart', function() {
		$(this).animate({width: '900px'}, 600);	
		$(this).animate({width: '250'}, 800);

	});
		$('#button-16').click('click touchstart', function() {
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '0'}, 200);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);

	});
		$('#button-17').click('click touchstart', function() {
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({height: '100'}, 800);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '0'}, 200);
		$(this).animate({height: '0'}, 800);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({height: '250'}, 800);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);
		

	});
		$('#button-20').click('click touchstart', function() {
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '0'}, 200);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);

	});
		$('#button-21').click(function() {
    alert("Hello!");
	});
$('#button-2').hover(function() {
		$(this).animate({opacity: '0'}, 200);
	});
$('#button-23').click('click touchstart', function() {
		$(this).animate({height: '500px'}, 600);	
		$(this).animate({height: '250'}, 800);
	});
 $('#button-24').mousemove(function(e){
		
		// update mouse x and y position
		var xPos = e.pageX-125;
		var yPos = e.pageY-125;

		$(this).css({
			'position' : 'absolute',
			'top' :  yPos+'px',
			'left' :  xPos+'px',
		});
});
});



