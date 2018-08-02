function mostrar()
{   var precio;
    var descuento;
    var resultado;
    var resultado2;
    var descuentoDin;
    var iva=10;
    precio = prompt("ingrese el precio");
    descuento = prompt("ingrese el porcentaje de descuento");
    descuentoDin = precio * descuento/100;
    resultado = precio - descuentoDin;
    resultado2 = precio - resultado;
    alert ("descuento en dinero: "+resultado2+", precio con descuento: "+resultado+", el iva es de "+iva);
    


}