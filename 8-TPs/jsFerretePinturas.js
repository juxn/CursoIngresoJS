/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var temperatura;
    var resultado;
    temperatura = document.getElementById("Temperatura").value; 
    temperatura = parseInt (temperatura); 
    resultado = (temperatura - 32) * (5/9);
    alert (temperatura + " " + "grados fahrenheit" + " " + "son" + " " + resultado + " " + "grados centígrados" );  
	
}

function CentigradosFahrenheit () 
{   var temperatura;
    var resultado;
    temperatura = document.getElementById("Temperatura").value; 
    temperatura = parseInt (temperatura); 
    resultado = (9/5) * temperatura + 32;
    alert (temperatura + " " + "grados centígrados" + " " + "son" + " " + resultado + " " + "grados fahrenheit" );   
	
}
