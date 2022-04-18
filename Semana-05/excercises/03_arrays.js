//Arrays
console.log("Arrays - ejercicio a");
var meses= new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
console.log(meses[5],meses[11]);

console.log("Arrays - ejercicio b");
meses.sort();
console.log(meses);

console.log("Arrays - ejercicio c");
meses.unshift("Año 2022");
meses.push("Argentina");
console.log(meses);

console.log("Arrays - ejercicio d");
meses.shift();
meses.pop();
console.log(meses);

console.log("Arrays - ejercicio e");
meses.reverse();
console.log(meses);

console.log("Arrays - ejercicio f");
console.log(meses.join("-"));

console.log("Arrays - ejercicio g");
var meses2 = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
meses3=meses2.slice(4,11);
console.log(meses3);