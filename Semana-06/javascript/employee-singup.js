window.onload = function (){
    var fName = document.getElementById("fname");
    var lbFName = document.getElementById("lbfname");
    var lName = document.getElementById("lname");
    var lbLName = document.getElementById("lblname")
    var dni = document.getElementById("dni");
    var lbDni= document.getElementById("lbdni")
    var bDate = document.getElementById("bdate");
    var lbDate= document.getElementById("lbdate")
    var pNumber = document.getElementById("pnumber");
    var lbPNumber = document.getElementById("lbnumber")
    var adress = document.getElementById("adress");
    var lbAdress= document.getElementById("lbadress");
    var state = document.getElementById("state");
    var lbState= document.getElementById("lbstate");
    var cc = document.getElementById("cc");
    var lbCc=document.getElementById("lbcc");
    var email = document.getElementById("email");
    var lbEmail=document.getElementById("lbemail");
    var password1 = document.getElementById("password1");
    var lbPass1 = document.getElementById("lbpass1");
    var password2 = document.getElementById("password2");
    var lbPass2=document.getElementById("lbpass2");
    var btSingUp=document.getElementById("btsingup");
    var numbers =["0","1","2","3","4","5","6","7","8","9"];
    var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v",
    "w","x","y","z"];
    var symbols =[",",";","@",".",",",":","`","+","-","[","]","(",")","/","&","%","$","·","#","!","*","?","¿",
    "_","º","ª"]
    var fNameLength, fNameOk, lNameLength, lNameOk, dniLength, dniOk, pNumberLength, pNumberOk,adressLength,
    stateLength,ccLength, ccNumberOk,spaceBetween;
    var bValidation,ccValidation,dniValidation,fNameValidation,lNameValidation,stateValidation,adressValidation,
    pNumberValidation,password1Validation,password2Validation, emailValidation;
    
    //First Name Validation
    lbFName.style.display="none";
    fName.addEventListener('focus',function(){
        lbFName.style.display = "none";
    })

    fName.addEventListener('blur',function(){
        fNameLength= false;
        fNameOk=false;
        if (fName.value.length>2){
            fNameLength= true;
        }
        for (i=0; i<letters.length; i++){
            for (j=0;j<numbers.length; j++){
                if (fName.value.includes(numbers[j])){
                    fNameOk= false;
                } else{
                if (fName.value.includes(letters[i])){
                    fNameOk= true;
                }
                if(fNameLength && fNameOk){
                    for (k=0; k<symbols.length;k++){
                        if (fName.value.includes(symbols[k])){
                            fNameOk=false;
                        }
                    }
                    lbFName.style.display="none";
                    fNameValidation=1;
                } else {
                    lbFName.style.display="flex"
                    fNameValidation=0;
                    }
                }
            }
        }
    })

    //Last Name Validation
    lbLName.style.display="none";
    lName.addEventListener('focus',function(){
        lbLName.style.display = "none";
    })

    lName.addEventListener('blur',function(){
        lNameLength= false;
        lNameOk=false;
        if (lName.value.length>2){
            lNameLength= true;
        }
        for (i=0; i<letters.length; i++){
            for (j=0; j<numbers.length;j++){
                if (lName.value.includes(numbers[j])){
                    lNameOk= false;
                } else{
                if (lName.value.includes(letters[i])){
                        lNameOk= true;
                }
                if(lNameLength && lNameOk){
                    for(k=0;k<symbols.length;k++){
                        if(lName.value.includes(symbols[k])){
                            lNameOk=false;
                        }
                    }
                    lbLName.style.display="none";
                    lNameValidation=1;
                } else{
                    lbLName.style.display="flex";
                    lNameValidation=0;
                    }
                }
            }
        }
    })
    //DNI validation
    lbDni.style.display="none";
    dni.addEventListener('focus',function(){
        lbDni.style.display = "none";
    })

    dni.addEventListener('blur',function(){
        dniLength=false;
        dniOk= false;
        if(dni.value.length>7){
            dniLength= true;
        }
        for (i=0; i<numbers.length; i++){
            for (j=0; j<letters.length;j++){
                if (dni.value.includes(letters[j])){
                    dniOk=false;
                } else {
                    if (dni.value.includes(numbers[i])){
                        dniOk= true;
                    }
                }
            }
        }
        for(k=0;k<symbols.length;k++){
            if(dni.value.includes(symbols[k])){
                dniOk=false;
            }
        }
        if (dniLength && dniOk){
            lbDni.style.display = "none";
            dniValidation=1;
        } else{
            lbDni.style.display= "flex";
            dniValidation=0;
        }
    })
    
    //Birthday validation
    lbDate.style.display="none";
    bDate.addEventListener('focus', function(){
        lbDate.style.display="none";
    })
    var today = new Date();
    var yearToday = today.getFullYear()*1;
    var monthToday= today.getMonth()*1;
    var dayToday= today.getDate()*1;
    
    bDate.addEventListener('blur',function(){
    var yearB = bDate.value.substring(0,4)*1;
    var monthB=bDate.value.substring(5,7)*1;
    var dayB=bDate.value.substring(8,10)*1;
        var edad = yearToday-yearB;
        var monthCheck = monthToday-monthB;
        var dayBCheck =  dayToday-dayB;
        if (edad<18){
            lbDate.style.display="flex";
            bValidation=0;
        } else {
            if(monthCheck<0){
                lbDate.style.display="none";
                bValidation=1;
            } else{
                if (dayBCheck<0){
                    bDate.style.display="none";
                    bValidation=1;
                }
            }
        }
    })
    
    //Phone number validation
    lbPNumber.style.display="none";
    pNumber.addEventListener('focus',function(){
        lbPNumber.style.display="none";
    })

    pNumber.addEventListener('blur',function(){
    pNumberLength=false;
    pNumberOk=false;
    if(pNumber.value.length>9 && pNumber.value.length<11){
        pNumberLength= true;
    }
    for (i=0; i<numbers.length; i++){
        for (j=0; j<letters.length;j++){
            if (pNumber.value.includes(letters[j])){
                pNumberOk=false;
            } else {
                if (pNumber.value.includes(numbers[i])){
                    pNumberOk= true;
                }
            }
        }
    }
    for (k=0;k<symbols.length;k++){
        if (pNumber.value.includes(symbols[k])){
            pNumberOk=false;
        }
    }
    if (pNumberLength && pNumberOk){
        lbPNumber.style.display="none";
        pNumberValidation=1;
    } else{
        lbPNumber.style.display="flex";
        pNumberValidation=0;
        }
    })
    
    //Adress Validation
    lbAdress.style.display="none";
    adress.addEventListener('focus',function(){
        lbAdress.style.display="none";
    })
    adress.addEventListener('blur',function(){
        adressLength= false;
        if(adress.value.length<5){
        adressLength= false;
        } else{
            adressLength= true;
        }
    for (k=0;k<symbols.length;k++){
        if(adress.value.includes(symbols[k])){
            adressLength=false;
        }
    }
    const spaceBetween = adress.value.indexOf(' ');
    if(adressLength && spaceBetween<adress.value.length-1 && spaceBetween>0){
        lbAdress.style.display="none";
        adressValidation=1;
    } else{
        lbAdress.style.display="flex";
        adressValidation=0;
        }
    })
    
    //State Validation
    lbState.style.display="none";
    state.addEventListener('focus',function(){
        lbState.style.display="none";
    })
    state.addEventListener('blur',function(){
        stateLength= false;
        if(state.value.length<3){
        stateLength= false;
        } else{
            stateLength= true;
        }
    for (k=0;k<symbols.length;k++){
        if(state.value.includes(symbols[k])){
            stateLength=false;
        }
    }
    if(stateLength){
        lbState.style.display="none";
        stateValidation=1;
    } else{
        lbState.style.display="flex";
        stateValidation=0;
        }
    })
    
    //Postal Code Validation
    lbCc.style.display="none";
    cc.addEventListener('focus',function(){
        lbCc.style.display="none";
    })

    cc.addEventListener('blur',function(){
    ccLength=false;
    ccNumberOk=false;
    if(cc.value.length>3 && cc.value.length<6){
        ccLength= true;
    }
    for (i=0; i<numbers.length; i++){
        for (j=0; j<letters.length;j++){
            if (cc.value.includes(letters[j])){
                ccNumberOk=false;
            } else {
                if (cc.value.includes(numbers[i])){
                    ccNumberOk= true;
                }
            }
        }
    }
    for (k=0;k<symbols.length;k++){
        if (cc.value.includes(symbols[k])){
            ccNumberOk=false;
        }
    }
    if (ccLength && ccNumberOk){
        lbCc.style.display="none";
        ccValidation=1;
    } else{
        lbCc.style.display="flex";
        ccValidation=0;
    }
    })
    
    //Email Validation
    lbEmail.style.display = "none";
    email.addEventListener('focus',function(){
        lbEmail.style.display = "none";
        })
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    email.addEventListener('blur',function(){
        if (emailRegex.test(email.value)){
            lbEmail.style.display = "none";
            emailValidation=1;
        } else {
            lbEmail.style.display = "flex";
            emailValidation=0;
        }
    })

    //Password 1 Validation
    lbPass1.style.display = "none";
    password1.addEventListener('focus',function(){
    lbPass1.style.display = "none";
    })
    password1.addEventListener('blur',function(){
        passLength1=false;
        pass1Num = false;
        pass1Letter= false;
        if (password1.value.length>7){
            passLength1=true;
        }
        for (i=0; i <letters.length; i++){
            if (password1.value.includes(letters[i])){
                pass1Letter = true; 
                for (j=0;j<numbers.length;j++){
                    if (password1.value.includes(numbers[j])){
                        pass1Num = true;
                    }
                }
            }
        if (passLength1 && pass1Letter && pass1Num){
            lbPass1.style.display = "none";
            password1Validation=1;
        } else {
            lbPass1.style.display = "flex";
            password1Validation=0;
        }
        }
    })
    //Password 2 Validation
    lbPass2.style.display="none";
    password2.addEventListener('focus',function(){
        lbPass2.style.display="none"
    })
    password2.addEventListener('blur',function(){
        if(password2.value===password1.value){
            lbPass2.style.display="none";
            password2Validation= 1;
        }else{
            lbPass2.style.display="flex";
            password2Validation=0;
        }
    })
    
    //Summit Button
    btSingUp.addEventListener('click',function(){
        if(fNameValidation===1 && lNameValidation===1 && dniValidation===1 && bValidation===1 && pNumberValidation===1
            && adressValidation===1 && stateValidation===1 && ccValidation===1 && emailValidation===1 &&
            password1Validation===1 && password2Validation===1){
            alert("You are sing up successfully! First Name: "+fName.value
            +"Last Name: "+lName.value
            +"DNI: "+dni.value
            +"Birthday date: "+ bDate.value
            +"Phone Number: "+pNumber.value
            +"Adress: "+adress.value
            +"State: "+state.value
            +"Postal Code: "+cc.value
            +"Email: "+email.value
            +"Password: "+password1.value
            +"Re-Password: "+password2.value);
            }else {
            alert("Review your imputs")
            }
    })
}