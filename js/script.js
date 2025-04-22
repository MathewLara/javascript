function procesarDatos (event) {
    //Evita que la pagina se recargue//
    event.preventDefault();
    // Obtener los valores de los numeros//
    var n1= parseFloat(document.getElementById("numero1").value);
    var n2= parseFloat(document.getElementById("numero2").value);
    var n3= parseFloat(document.getElementById("numero3").value);
    var n4= parseFloat(document.getElementById("numero4").value);
    var n5= parseFloat(document.getElementById("numero5").value);
    //Verifica que los numeros entren en el 0 y 10//
    if (
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10 ||
        n4 < 0 || n4 > 10 ||
        n5 < 0 || n5 > 10
    ) {
        //Mnesaje cuando los valores no esten entree 0 y 10//
        alert("Las notas deben estar entre el 0 y 10");
        return;
    }

    //Aqui calcula el promedio//
    var suma= n1+n2+n3+n4+n5;
    var promedio= suma/5;

    //Muestra el resultado//
    document.writeln ("Promedio: " + promedio.toFixed(2) + "<br>");
    if (promedio >=7) {
        document.writeln ("Estas Aprobado");
    } else if (promedio >=3.5){
        document.writeln ("Estas suspenso");
    } else {
        document.writeln ("Pierdes el semestre")
    }
}
