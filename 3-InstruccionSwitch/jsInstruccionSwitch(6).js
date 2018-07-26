function mostrar()
{
//tomo la edad  
var laHora;
var laHora = document.getElementById('hora').value;

switch(laHora)
{
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    alert("Es de mañana");
    break;
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    alert("Es de tarde");
    break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
    alert("Es de noche")
    break;
    default:
    alert("La hora no existe");

    /* lo habia hecho 
    if (laHora > 24)
    alert("La hora no existe!!");
    per el profesor me dijo que lo ideal es no usar if, tambièn me salian ambos pop ups 
    de esta manera discrimina directamente lo que esta o no dentro del rango de hora */



}
}//FIN DE LA FUNCIÓN