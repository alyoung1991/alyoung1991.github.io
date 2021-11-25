let i = 0;
let speed = 140;
let titleText = "Software Engineer";

// Cursor Blinking Animation
setInterval(function(){
	$('.cursor').toggleClass("blink");
}, 550);

typeAnimation();

function typeAnimation(){
	if(i < titleText.length){
		document.querySelector('.title').innerHTML += titleText.charAt(i);
		i++;
		setTimeout(typeAnimation, speed);
	}
}

// nav menu
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let navHideButton = document.querySelector('.nav-hide-button');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('display-nav');
});

navHideButton.addEventListener('click', () => {
	navMenu.classList.toggle('display-nav');
});

// nav link event listeners
let aboutLink = document.querySelector(".about-link");
let projectsLink = document.querySelector(".projects-link");
let skillsLink = document.querySelector(".skills-link");
let contactLink = document.querySelector(".contact-link");

let projects = document.querySelector(".projHead");
let skills = document.querySelector(".skillsHead");
let contact = document.querySelector(".contactHead");

aboutLink.addEventListener("click", () => {
	window.scrollTo(0, 0);
});

projectsLink.addEventListener("click", () => {
	projects.scrollIntoView();
});

skillsLink.addEventListener("click", () => {
	skills.scrollIntoView();
});

contactLink.addEventListener("click", () => {
	contact.scrollIntoView();
});
