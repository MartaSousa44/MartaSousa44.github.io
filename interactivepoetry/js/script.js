//"criar" a imagem e declarar os atributos
(function makeDiv(){
  var elem = document.createElement("img");
  
  elem.setAttribute("src", "img/cursor2.png");
	elem.setAttribute("height", "50px");
	elem.setAttribute("width", "50px");
	elem.setAttribute("alt", "interaction");
  elem.setAttribute("position", "absolute");

  $newdiv = $('<div/>').css({
        'width':elem.width+'px',
        'height':elem.height+'px',
	});

  //posição random
  var posx = (Math.random() * ($(document).width() - elem.width)).toFixed();
  var posy = (Math.random() * ($(document).height() - elem.height)).toFixed();
    
  //atributos css à div  
  $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none',
        'background-image': 'url(img/cursor2.png)',
        'background-size': '50px 50px'
    }).appendTo( '#pagina-privacy' ).fadeIn(100).delay(1000).fadeIn(100,function(){  //sitio para "inserir" a div
       makeDiv();
    }); 
})(); 