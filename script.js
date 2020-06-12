function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function outofstock() {
  alert("This product is out of stock");
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("prodslide");
  var dots = document.getElementsByClassName("option");
  if (n > x.length){
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("opacity-off", "");
  }

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " opacity-off";
}

function changeText() {
  document.getElementById('price-text').innerHTML = "₱300.00";
}

function changeText2() {
  document.getElementById('price-text').innerHTML = "₱500.00";
}