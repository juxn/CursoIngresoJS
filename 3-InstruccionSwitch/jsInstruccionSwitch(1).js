function mostrar()
{
//tmo la edad  

var mesDelAño;
var mesDelAño = document.getElementById('mes').value;

 switch (mesDelAño)
 {
    case "Enero":
    alert("que comiences bien el año!!!");
    break;
    case "Marzo":
    alert ("a clases!!!");
    break;
    case "Julio":
    alert ("se vienen las vacaciones!!!");
    break;
    case "Diciembre":
    alert ("Felices fiesta!!");
    break;
    default: 
    alert ("nada");
}

}//FIN DE LA FUNCIÓN