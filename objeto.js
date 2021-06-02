function persona(nombre1,apellido1,edad1){
  this.nombre1=nombre1;
  this.apellido1=apellido1;
  this.edad1=edad1;
  
  console.log('Hola ' + this.nombre1 + " " + this.apellido1);
  console.log("Tu edad es : " + this.edad1);
}
/*var persona1=new persona("rodrigo","rivas",24);
console.log(persona1);*/


var parametros =function(){
  var nombre=prompt('¿cual es tu nombre? ');
  var apellido=prompt('¿cual es tu apellido? ');
  var edad=prompt('¿cual es tu edad? ');
  return persona(nombre,apellido,edad);
}
parametros();
