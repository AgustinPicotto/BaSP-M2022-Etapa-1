console.log("If Else - ejercicio a");
var number;
number=Math.random();
if (number>=0.5){
    window.alert("Greather than 0,5");
    //console.log("Greather than 0,5");
}else{
    window.alert("Lower than 0,5");
    //console.log("Lower than 0,5");
}
//console.log(number);

console.log("If Else - ejercicio b");
var number1;
number1=Math.round(Math.random()*100);
console.log(number1);
/*“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/

if (number1<2){
    //console.log("Es un bebé");
    window.alert("Es un bebé");
}else if(number1>=2 && number1<=12){
    //console.log("Niño");
    window.alert("Es un Niño");
}else if(number1>12 && number1<20){
    //console.log("Adolescente");
    window.alert("Es un Adolescente");
}else if(number1>19 && number1<31){
    //console.log("Joven");
    window.alert("Es un Joven");
}else if (number1>30 && number1<61){
    //console.log("Adulto");
    window.alert("Es un Adulto");
}else if(number1>60 && number1<76){
    //console.log("Adulto mayor");
    window.alert("Es un Adulto Mayor");
}else{
    //console.log("Anciano");
    window.alert("Es un Anciano");
}
