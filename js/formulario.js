
function mostrarAlerta(){   
    //se aplica el fondo de pantalla
     document.getElementById("fondoPantalla").style.display="block";
     //fondo del alert
     document.getElementById("estiloDeAlerta").style.display="block";
     //cierra la laerta despues de 2 segundos
    
    
}
//cierra el fonodo de pantalla y el cuadro de alerta
function CerrarAlerta(){
    document.getElementById("fondoPantalla").style.display ="none";
    document.getElementById("estiloDeAlerta").style.display="none";

    

}


document.getElementById("formulario").addEventListener("submit", function(agendar){
    agendar.preventDefault();
    alert("cita agendada con exito c:");
    mostrarAlerta();

    this.reset()
})

document.getElementById("cerrarAlert").addEventListener("click",CerrarAlerta)
window.alert=function(){};