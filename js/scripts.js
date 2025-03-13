let mensaje = document.getElementById("mensajito")
            console.log(mensaje.innerText);
            
            //alert(mensaje.innerText);

let variable;//declaracion una variable vacia
variable = 1.666; //asignando un valor
console.log("El tipo de de dato es: "+typeof variable);
console.log("El valor de la variable es: "+variable);

variable = false; 
console.log("El tipo de de dato es: "+typeof variable);
console.log("El valor de la variable es: "+variable);

variable = "Hola Mundo"
console.log("El tipo de de dato es: "+typeof variable);
console.log("El valor de la variable es: "+variable);

function calcular(sumando1,sumando2,salida){
    let sumando1_obj = document.getElementById(sumando1);
    let sumando2_obj = document.getElementById(sumando2);
    let calculo = ( parseFloat(sumando1_obj.innerText) + parseFloat(sumando2_obj.innerText) );

    document.getElementById(salida).innerHTML = calculo;
}

function crearElemento(url = null){
    if(url !== null){
        url = url
    }
    else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_f_109008395_OQDupHMza1V6CNOzrJwWAKlakT4IsRW.jpg"
    }
}