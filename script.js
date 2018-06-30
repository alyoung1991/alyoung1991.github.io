var i = 0;
var speed = 140;
var titleText = "Web Developer";

// Cursor Blinking Animation
setInterval(function(){
	$('.cursor').toggleClass("blink");
}, 550);

typeAnimation();

function typeAnimation(){
	if(i < titleText.length){
		document.getElementById('title').innerHTML += titleText.charAt(i);
		i++;
		setTimeout(typeAnimation, speed);
	}
}



