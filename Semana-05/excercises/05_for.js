console.log("For - ejercicio a");
var array1 = new Array ("mate","termo","bombilla","yerba","churros");
array1.forEach(element => window.alert(element));

console.log("For - ejercicio b");
var temp, lengthArray;
lengthArray=array1.length;
for (var i=0;i<lengthArray; i++){
temp=array1[i].substring(0,1).toUpperCase()+array1[i].substring(1);
window.alert(temp);
}

console.log("For - ejercicio c");
var sentence
sentence="";
for (var i=0;i<lengthArray; i++){
sentence=sentence+array1[i];
}
window.alert(sentence);

console.log("For - ejercicio d");

var array2 = new Array();
for (j=0; j<10;j++){
    array2.push(j);
}
console.log(array2);