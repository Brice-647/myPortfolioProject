let slideIndex = 0;
showSlides();

// Manual controls
function plusSlides(n) {
  slideIndex += n - 1; // adjust because showSlides() increments
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1]

  // Change image every 2 seconds
  // setTimeout(showSlides, 2000);
}

