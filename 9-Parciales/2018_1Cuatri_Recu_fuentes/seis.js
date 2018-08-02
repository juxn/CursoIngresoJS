function mostrar()
{
    var nota;
    nota = prompt("ingrese su nota");

    switch (nota)
    {
        case "0":
        case "1":
        case "2":
        case "3":
        alert("La pròxima se puede");
        break;
        case "4":
        case "5":
        case "6":
        alert("Raspando");
        if (nota == "4"){
            alert ("Debes preocuparte màs");
        }
        break;
        case "7":
        case "8":
        case "9":
        case "10":
        alert("Aprobò");
        if (nota > "8"){
            alert("Muy bien");
        }
        break;
        default:
        alert("Ingrese una nota vàlida");
        
        





    }

}
