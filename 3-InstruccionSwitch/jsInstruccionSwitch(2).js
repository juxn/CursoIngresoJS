function mostrar()
{
//tomo la edad  
var mesDelAño;
var mesDelAño = document.getElementById('mes').value;

// alert (mesDelAño);

switch(mesDelAño)
{
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("Ya pasamos el frio, ahora calor!!!");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio.");
    break;
    default:
    alert("Falta para el invierno.");






}
}//FIN DE LA FUNCIÓN