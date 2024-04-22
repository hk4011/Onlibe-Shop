document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  var scrollToTopBtn = document.getElementById("scroll-to-top");

  // Add click event listener to the button
  scrollToTopBtn.addEventListener("click", function () {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  var scrollToTopBtn = document.getElementById("product");

  // Add click event listener to the button
  scrollToTopBtn.addEventListener("click", function () {
    // Scroll to the top of the page
    console.log("sssssss");
    window.location.href = "product.html";
  });
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//----------------------------------------------------------------------------------------------------------------------------------
