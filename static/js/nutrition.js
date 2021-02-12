function dispReceipe(ingridients) {

const recipeVideos = {
    Kale: "gJ1eR7dOCtY",
    Strawberries: "zSgXnf6IHPc",
    Broccoli: "nXcxRvT3L48",
    "Red-Peppers":"8DJQaPnLcFk",
    Kiwi: "ntHDZueqvpQ",
    Sprouts: "-hpYoi2aagw",
    Pineapple: "68eq5xzp_dA",
}
    const receipeTextList = `<iframe width="400" height="300" max-width="100%"  src="https://www.youtube.com/embed/${recipeVideos[ingridients]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    

     document.getElementById("receipeText").innerHTML = receipeTextList;
     

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("nutritionSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




// e.onmouseover = dispReceipe(){
//     document.getElementById("receipeText").style.display = 'none';
//   }