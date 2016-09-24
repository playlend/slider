sliderInt = 1;
sliderNext = 2;
$(document).ready(function() {
	$("#slider #1").fadeIn(300);

	startSlider();


});

function startSlider() {

	counter = $("#slider img").size();

	loop = setInterval(function(){

		if (sliderNext > counter) {
			sliderNext = 1;
			sliderInt = 1;
		}


		$("#slider img").fadeOut(300);
		$("#slider #" + sliderNext).fadeIn(300);




		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;




	}, 3000);


}

function prev() {
	newSlide = sliderInt -1;
	showSlide(newSlide);	
}

function next() {
	newSlide = sliderInt +1;
	showSlide(newSlide);	
}

function stopLoop() {
	window.clearInterval(loop);
}




function showSlide(id) {
		stopLoop();
		if (id > counter) {
			id = 1;
		}
		else if (id < 1){
			id = counter;
		}


		$("#slider img").fadeOut(300);
		$("#slider #" + id).fadeIn(300);




		sliderInt = id;
		sliderNext = id + 1;

		startSlider();


	}

