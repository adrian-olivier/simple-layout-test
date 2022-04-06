let slideIndex = 0;
let nextTimer = null;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  nextTimer = setTimeout(showSlides, 2000);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  clearTimeout(nextTimer);
  showSlides();
}