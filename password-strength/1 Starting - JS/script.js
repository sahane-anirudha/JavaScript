let passwordinput = document.getElementById("password");
let strengthtext = document.getElementById("strength");
let message = document.getElementById("message");


passwordinput.addEventListener("input", function(){
    if(passwordinput.value.length == 0){
        message.style.display = "none";
        passwordinput.style.borderColor = "white";
        // document.getElementById("strength").innerText = "";
    }
    else if(passwordinput.value.length  <4){
        message.style.display = "block";
        document.getElementById("strength").innerText = "Weak";
        document.getElementById("strength").style.color = "red";
        passwordinput.style.borderColor = "red";
    }
    else if(passwordinput.value.length < 8){    
        document.getElementById("strength").innerText = "Medium";
        document.getElementById("strength").style.color = "orange";
        passwordinput.style.borderColor = "orange";
    }
    else{
        document.getElementById("strength").innerText = "Strong";
        document.getElementById("strength").style.color = "green";
        passwordinput.style.borderColor = "green";
        // message.style.display = "none";
    }
})