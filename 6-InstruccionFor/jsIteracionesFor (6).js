function mostrar()
{  
     var contPares=0;
     var num = prompt("ingrese un nùmero");
     num = parseInt(num);

     for (var i=1; i <= num; i++){
         if (num%2 == 0){
             console.log(num);
             contPares++;
         }
     }




}//FIN DE LA FUNCIÓN