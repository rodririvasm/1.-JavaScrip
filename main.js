//alert('complement del html');
/*
var nombre = 'rodrigo';
var apellidos = 'rivas';
var edad = 24;

console.log(nombre+' ' + apellidos);
console.log('mi edad es:' + edad);
*/

var numero1=prompt('Digite un numero cualquier');
var numero2=prompt('Digite otro numero cualquier');



var otronumero=parseInt(numero1)+parseInt(numero2);
var resta=numero1-numero2;
var division=numero1/numero2;
var multiplicacion=numero1*numero2;
console.log('suma:' + otronumero);
console.log('resta:' + resta);
console.log('division:' + division);
console.log('multiplicacion:' + multiplicacion);



var nombre_generation=prompt('¿cual es tu nombre completo?');
var edad_generation= prompt('¿cual es tu edad '+ nombre_generation + '?' );

if (edad_generation>=18 && edad_generation<=29){

    console.log('bienvenido ' + nombre_generation + ',ha sido admitido al programa de generation mexico');
}else{
    console.log('lo lamentamos ' + nombre_generation + ',no ha sido seleccionado por el programa');
}

var sueldoDiario= prompt('Ingrese su salario diario ' + nombre_generation)

sueldoQuincenal_bruto=sueldoDiario*15;
sueldoMensual_bruto=sueldoDiario*30;

sueldoQuincenal_neto=sueldoQuincenal_bruto-(sueldoQuincenal_bruto*.3 + sueldoQuincenal_bruto*.1);
sueldoMensual_neto=sueldoMensual_bruto-(sueldoMensual_bruto*.3 + sueldoMensual_bruto*.1);

console.log('sueldo_bruto_ quincenal: ' + sueldoQuincenal_bruto);
console.log('sueldo_bruto_mensual: ' + sueldoMensual_bruto);
console.log('sueldo_neto_quincenal: ' + sueldoQuincenal_neto);
console.log('sueldo_neto_mensual: ' + sueldoMensual_neto);



