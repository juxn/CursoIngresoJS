function mostrar()
{  
    var num;
    num = prompt("Ingrese el nùmero");
    num = parseInt(num);



}//FIN DE LA FUNCIÓN




/* THIS ONE DIDN´T WORK 
for (var i=i; i = i<= num; i++){
         if (num%2 == 0){
             contPares++;
             console.log(i);
         }
         else if (num%i == 0){
             contDiv++;
             console.log(i);
             }

     }*/

     /* THIS ONE´S RIGHT 

     var contDiv=0;
     var contPares=0;
     var num; 
     num = prompt("ingrese un nùmero");
     num = parseInt(num);

     for (var i = 2; i<num; i++){
         if (num%i == 0){
             alert("no es primo");
         }
         else {
             alert("es primo");
             break;
         }
     } */