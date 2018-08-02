function mostrar()
{   
    var dia;
    dia = prompt("Ingrese un dìa de la semana.");

    switch(dia)
    {
        case "sabado":
        case "domingo":
        alert("Buen finde");
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        alert("A trabajar");
        break;
        default:
        alert("Ingrese un dìa valido.")




    }

}
