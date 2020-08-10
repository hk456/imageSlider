// Array of images
let imgs = document.querySelectorAll('.img');

// ctrl btns
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// function for next button
function movePrev() {
	let el = document.querySelector('.current');
	let prevEl = el.previousElementSibling;

	if (prevEl == null) {
		// if on the edge, use the reverse
		let nextEl = document.querySelector('.img-container').lastElementChild;
		nextEl.classList.toggle('current');
		nextEl.classList.toggle('hidden');
		el.classList.toggle('current');
		el.classList.toggle('hidden');
	} else {
		// regular sliding to previous img, if that's not the case
		prevEl.classList.toggle('current');
		prevEl.classList.toggle('hidden');
		el.classList.toggle('current');
		el.classList.toggle('hidden');
	}
}

// function for previous button
function moveNext() {
	let el = document.querySelector('.current');
	let nextEl = el.nextElementSibling;
	
	if (nextEl == null) {
		// if on the edge, use the reverse
		let prevEl = document.querySelector('.img-container').firstElementChild;
		prevEl.classList.toggle('current');
		prevEl.classList.toggle('hidden');
		el.classList.toggle('current');
		el.classList.toggle('hidden');
	} else {
		// regular sliding to next img, if that's not the case
		nextEl.classList.toggle('current');
		nextEl.classList.toggle('hidden');
		el.classList.toggle('current');
		el.classList.toggle('hidden');	
	}
}

// bubbling of buttons
document.addEventListener('click', function(e) {
	if (e.target == prevBtn) movePrev() // if it is previous button execute movePrev;
	if (e.target == nextBtn) moveNext() // if it is next button execute moveNext; 
});