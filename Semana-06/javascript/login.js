window.onload = function() {
    var lbEmail = document.getElementById('lb-login-email');
    var lbPass = document.getElementById('lb-login-pass');
    lbEmail.style.display = "none";
    lbPass.style.display = "none";
    var comprobation1, comprobation2, largePass;
    var emailLogin = document.getElementById('email-login');
    emailLogin.addEventListener('focus',function(){
    lbEmail.style.display = "none";
    })
    emailLogin.addEventListener('blur',function(){
        comprobation1 = emailLogin.value.indexOf("@");  
        if (comprobation1===-1){
            lbEmail.style.display = "flex";
        } else {
            lbEmail.style.display = "none";
            comprobation1=2;
        }
    })
    var passLogin = document.getElementById('pass-login');
        passLogin.addEventListener('focus',function(){
        lbPass.style.display = "none";
    })
    passLogin.addEventListener('blur',function(){
        largePass = passLogin.value;
        console.log(largePass.length);
        comprobation2=0;
        if (largePass.length<7){
            comprobation2=-1;
        }
        if (comprobation2===-1){
            lbPass.style.display = "flex";
        } else {
            lbPass.style.display = "none";
            comprobation2=2;
        }
    })
    var btLogin = document.getElementById('button-login');
    btLogin.addEventListener('click', function(){
        if(comprobation1===2 && comprobation2===2){
            window.alert("Your are login");
        } else {
            window.alert("Please review the email and password inputs");
        }
    })
}