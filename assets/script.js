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

// Récupérer les éléments du DOM
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const slideTagLine = document.querySelector("#banner > p");
const dots = banner.querySelector(".dots");

// Initialisation l'index des slides
let slideIndex = 0

// Fonction pour changer de slide
function changeSlide (direction){
	slideIndex = slideIndex + direction
	if (slideIndex > slides.length -1){
		slideIndex = 0
	}
	if (slideIndex < 0){
		slideIndex = slides.length -1
	}
	showSlide ();
}

// Fonction pour afficher la slide et les bullet points
function showSlide () {
	bannerImg.src = slides[slideIndex].src;
	slideTagLine.innerHTML = slides[slideIndex].tagLine;

	// Mise en place des bullet points
	dots.innerHTML = "";
	for (let i = 0; i < slides.length; i++) {
				
		const dot = document.createElement("span");
		dot.classList.add("dot");
		
		if (i === slideIndex) {
			dot.classList.add("dot_selected");
		}
			dots.appendChild(dot);
	}
}

// Appel de la fonction pour afficher la première slide 
showSlide ();

// Ajout des écouteurs d'événements pour les flèches
arrowRight.addEventListener("click", function () {
  changeSlide(+1);
});
arrowLeft.addEventListener("click", function () {
  changeSlide(-1);
}); 

// Ajout de l'écouteur d'événement pour les bullet points et changement de slide au clic d'une bullet point
dots.addEventListener("click", (event) => {
	if (event.target.classList.contains("dot")) {
		
		// Crée un array contenant les bullet points et donne l'index de celui cliqué avec event target
		const dotIndex = Array.from(dots.children).indexOf(event.target);
		slideIndex = dotIndex;
		showSlide();
	}
});