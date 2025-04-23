function procesarDatos(event) {
    event.preventDefault ();

    //Declarar Variable a, b y c//
    var a= parseFloat (document.getElementById("numero1").value);
    var b= parseFloat (document.getElementById("numero2").value);
    var c= parseFloat (document.getElementById("numero3").value);
    
    if(a===0) {
        alert ("No se puede ingresar el numero 0");
        return;
    }

    //Sacar Discriminantes//
    var d= b * b - 4 * a * c;
    if (d > 0){
        var x1= (-b + Math.sqrt(d))/(2 * a);
        var x2= (-b - Math.sqrt(d))/(2 * a);
        alert("Las raices de los numeros son: \n1x: " + x1 + "\n2x:" + x2);
    } else if (d===0){
        var x= -b / (2*a);
        alert("Solo tiene una solucion: nx: " + x );
    }
    else{
        alert("No tiene niguna raiz");
    }
}