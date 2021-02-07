function openComments() {
  var div = document.getElementById("comments-area");
  var banner = document.getElementById("banner");
  var slides = document.getElementById("slides-container");

  if (div.style.display === "none") {
    div.style.display = "block";
    banner.style.display = "none";
    slides.style.display = "none";
  } else {
    div.style.display = "none";
    banner.style.display = "block";
    slides.style.display = "none";
  }
}

// button close who takes to banner

function backBanner() {
  var div = document.getElementById("comments-area");
  var banner = document.getElementById("banner");
  var slides = document.getElementById("slides-container");

  if (div.style.display === "none") {
    div.style.display = "none";
    banner.style.display = "block";
    slides.style.display = "none";
  } else {
    banner.style.display = "none";
    slides.style.display = "block";
  }
}

// slide pages

var slideIndex = 0;
showSlide(slideIndex);

function currentSlide(n) {
  var div = document.getElementById("comments-area");
  var banner = document.getElementById("banner");
  var slides = document.getElementById("slides-container");

  showSlide(slideIndex = n);
  div.style.display = "none";
  banner.style.display = "none";
  slides.style.display = "block";
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}