const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"src":"assets/images/slideshow/slide1.jpg"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"src":"assets/images/slideshow/slide2.jpg"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"src":"assets/images/slideshow/slide3.jpg"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"src":"assets/images/slideshow/slide4.png"
	}
]

const nbSlides = slides.length;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const slideTagLine = document.querySelector("#banner > p");

let slideCount = 1


function changeSlide (direction){
	bannerImg.src = slides[slideCount].src;
	slideTagLine.innerHTML = slides[slideCount].tagLine;
	
	console.log(slideCount, slides[slideCount], direction.target)

	if (direction === "left") {
		
		if (slideCount <= 0) {
    	slideCount = slides.length;
    	}
		slideCount--;
	} else {

		slideCount++;
    	if (slideCount >= slides.length) {
    	slideCount = 0;
    	}
	}
}	

arrowRight.addEventListener("click", function () {
  changeSlide("right");
});

arrowLeft.addEventListener("click", function () {
  changeSlide("left");
}); 

