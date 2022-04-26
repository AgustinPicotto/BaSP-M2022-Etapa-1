window.onload = function (){
    var fName = document.getElementById("fname");
    var lbFName = document.getElementById("lbfname");
    var lName = document.getElementById("lname");
    var dni = document.getElementById("dni");
    var bDate = document.getElementById("bdate");
    var pNumber = document.getElementById("pnumber");
    var adress = document.getElementById("adress");
    var state = document.getElementById("state");
    var cc = document.getElementById("cc");
    var email = document.getElementById("email");
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    var numbers =["0","1","2","3","4","5","6","7","8","9"];
    var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    var nameLength, nameOk;

    //Name Validation
    lbFName.style.display="none";
    fName.addEventListener('focus',function(){
        lbFName.style.display = "none";
    })

    fName.addEventListener('blur',function(){
        nameLength= false;
        nameOk=false;
        if (fName.value.length>2){
            nameLength= true;
        }
        for (i=0; i<letters.length; i++){
            if (fName.value.includes(letters[i])){
                nameOk= true;
            }
        }
        if(nameLength && nameOk){
            console.log(nameLength,nameOk);
            lbFName.style.display="none"
        } else {
            lbFName.style.display="flex"
        }
    })
}