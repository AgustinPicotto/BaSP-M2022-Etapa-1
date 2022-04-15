//Strings
console.log("Strings - ejercicio a");
var j;
j="Aeroventilas";
console.log(j.toUpperCase());

console.log("Strings - ejercicio b");
var k, l;
k="Autopistas"
l=k.substring(0,5);
console.log(l);

console.log("Strings - ejercicio c");
var m, n;
m="televisores";
n=m.substring(8,11);
console.log(n);

console.log("Strings - ejercicio d");
var o, p;
o="caballeria";
p=o.substring(0,1).toUpperCase()+o.substring(1,10);
console.log(p);

console.log("Strings - ejercicio e");
var q,r;
q="tensiometro grande";
r=q.indexOf(" ");
console.log(r);

console.log("Strings - ejercicio e");
var t, u;
t="campanario espeluznante";
v=t.indexOf(" ")+1;
u=t.substring(0,1).toUpperCase()+t.substring(1,11)+t.substring(v,v+1).toUpperCase()+t.substring(v+1);
console.log(u);