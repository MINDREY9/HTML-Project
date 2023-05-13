function limpiar(){
    //La funcion limpiar borra en input
    document.getElementById("Nota1").value="";
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("Definitiva").value="";
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//se asigna nota1 ingresada a n1
    var n2=document.getElementById("Nota2").value;//se asigna nota1 ingresada a n2
    var n3=document.getElementById("Nota3").value;//se asigna nota1 ingresada a n3
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}