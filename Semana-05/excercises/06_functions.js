console.log("Function - ejercicio a");
function suma(a,b){
    return a + b;
}
console.log(suma(20,15));

console.log("Function - ejercicio b");
function suma(a,b){
    if(isNaN(a) || isNaN(b)){
        window.alert("One of the pararameters is not a number");
    }else{
        return a + b;
        }
}
console.log(suma(20,15));

console.log("Function - ejercicio c");
function validateInteger(a,b){
    if (a % 1 == 0){
        b= 1;
    }else{
        b= 0;
}
return b;
}
if(validateInteger(5.5)===1){
    window.alert("Número es Entero");
}else{
    window.alert("El número es Decimal")
}

console.log("Function - ejercicio d");
function suma(a,b){
    if(isNaN(a) || isNaN(b)){
        window.alert("One of the pararameters is not a number");
    }else{
        if (a % 1 == 0){
        }else{
            a=Math.round(a);
            window.alert("El primer número fue redondeado a" + a);
        }
            if(b % 1 == 0){
        } else{
            b=Math.round(b);
            window.alert("El primer número fue redondeado a " + b);
    }
    return a + b;
    }
}
console.log(suma(20,15));

console.log("Function - ejercicio e");
function suma(a,b){
    if(isNaN(a) || isNaN(b)){
        window.alert("One of the pararameters is not a number");
    }else{
        a=validateInteger2(a)
        b=validateInteger2(b)
        return (a+b);
        }
    }
function validateInteger2 (c){
    if (c % 1 == 0){
    }else{
        c=Math.round(c);
        window.alert("El número fue redondeado a " + c);
    }
    return c;
}
console.log(suma(1,3.5));