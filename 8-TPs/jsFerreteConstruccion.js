/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{    var largo;
    var ancho;
    var resultado;
    largo = document.getElementById("Largo").value; 
    ancho = document.getElementById("Ancho").value; 
    largo = parseInt (largo); 
    ancho = parseInt (ancho);
    resultado = largo+ancho+largo+ancho
    alert ("total" + resultado * 3);

}
function Circulo () 
{   var radio;
    var resultado;
    radio = document.getElementById("Radio").value; 
    radio = parseInt (radio); 
    resultado = radio*(3.1416)
    alert ("total" + resultado * 2 * 3  );
	
}
function Materiales () 
{   var largo;
    var ancho;
    var resultado;
    largo = document.getElementById("Largo").value; 
    ancho = document.getElementById("Ancho").value; 
    largo = parseInt (largo); 
    ancho = parseInt (ancho);
    resultado = largo*ancho
    alert ("cemento" + resultado * 2 + " " + "cal" + resultado * 3);    
	
}