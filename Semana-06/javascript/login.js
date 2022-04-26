window.onload = function() {
    var lbEmail = document.getElementById('lb-login-email');
    var lbPass = document.getElementById('lb-login-pass');
    lbEmail.style.display = "none";
    lbPass.style.display = "none";
    
    var comprobation1, comprobation2, lengthPass, comprobationNum, comprobationLetter;
    var numbers =["0","1","2","3","4","5","6","7","8","9"];
    var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    var emailLogin = document.getElementById('email-login');
    
    // Email Validation
    emailLogin.addEventListener('focus',function(){
    lbEmail.style.display = "none";
    })
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    emailLogin.addEventListener('blur',function(){
        if (emailRegex.test(emailLogin.value)){
            lbEmail.style.display = "none";
            comprobation1=true;
        } else {
            lbEmail.style.display = "flex";
            comprobation1=false;
        }
    })
    
    //Password Validation
    var passLogin = document.getElementById('pass-login');
        passLogin.addEventListener('focus',function(){
        lbPass.style.display = "none";
    })
    passLogin.addEventListener('blur',function(){
        lengthPass=false;
        comprobationNum = false;
        comprobationLetter= false;
        if (passLogin.value.length>7){
            lengthPass=true;
            comprobation2 =true;
        }
        for (i=0; i <letters.length; i++){
            if (passLogin.value.includes(letters[i])){
            comprobationLetter = true; 
                for (j=0;j<numbers.length;j++){
                    if (passLogin.value.includes(numbers[j])){
                    comprobationNum = true;
                    }
                }
            }
        if (lengthPass && comprobationLetter && comprobationNum){
            lbPass.style.display = "none";
        } else {
            lbPass.style.display = "flex";
        }
        }
    })

    //Buttom Summit
    var btLogin = document.getElementById('button-login');
    btLogin.addEventListener('click', function(){
        console.log(comprobation1, comprobation2);
        if(comprobation1 && comprobation2){
            alert("Your are login successfully! Email: "+emailLogin.value
            +"Password: "+passLogin.value);
        } else {
            window.alert("Please review the email and password inputs");
        }
    })
}