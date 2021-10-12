upButton = document.getElementById("tBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function topButton() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}