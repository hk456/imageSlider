// Array of images
let imgs = document.querySelectorAll('img');
let current = document.querySelector('.current');

// ctrl btns
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function movePrev(el) {
	alert(el.classList);
}

function moveNext(el) {
	alert(el.classList);
}

document.addEventListener('click', function(e) {
	if (e.target == prevBtn) movePrev(current);
	if (e.target == nextBtn) moveNext(current); 
});