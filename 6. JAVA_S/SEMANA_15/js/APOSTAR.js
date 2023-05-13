function apostar(){
    //Generar numero aleatorio con metodo matematico random
    var a=Math.round(Math.round()*10);//Genera numero random
    document.getElementById("resultado").value=a;
    //Asignar numero ingresado al azar
    var b=document.getElementById("apostado").value;
    //Validar acierto
    if (a==b){
        document.getElementById("salida").value="Gano";
    }else{document.getElementById("salida").value="Perdió"};
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
    }