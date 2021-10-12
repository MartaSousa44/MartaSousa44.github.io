//devolver número de elementos com ID "transparente" ou "transparente2"
const letras = document.getElementById('transparente');
console.log("transparente", letras);

for (var i = 0; i < transparente.length; i++) {
    console.log (i)
}

const letras2 = document.getElementById('transparente2');
console.log("transparente2", letras2);

for (var i = 0; i < transparente2.length; i++) {
    console.log (i)
}

// fade info 
var info = document.getElementById('info'); 

document.getElementById('opc').onclick = function () { 
  info.classList.toggle('fade');
}

//o mesmo para a versão desktop
var info2 = document.getElementById('info2');

document.getElementById('opc2').onclick = function () {
  info2.classList.toggle('fade');
}

//mudar de cor quando o rato passa no botão
document.getElementById("opc2").onmouseover = function() {mouseOver()};
document.getElementById("opc2").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("opc2").style.color = "#CEFF00"; // instruções para as funções (mudar de cor)
}

function mouseOut() {
  document.getElementById("opc2").style.color = "#000";
}


document.getElementById("esc").onmouseover = function() {mouseOver1()};
document.getElementById("esc").onmouseout = function() {mouseOut1()};

function mouseOver1() {
  document.getElementById("esc").style.color = "#CEFF00"; // instruções para as funções (mudar de cor)
}

function mouseOut1() {
  document.getElementById("esc").style.color = "#000";
}

//trocar de texto
function myFunction() {
  var x = document.getElementById("hide");  
  if (x.innerHTML === "Transparency") {  //se o texto for transparency
    x.innerHTML = "No Transparency";  //trocar para no transparency
  } else {
    x.innerHTML = "Transparency";  //else volta a trocar
  }
}