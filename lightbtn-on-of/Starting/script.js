let bulbImage =document.addEventListener('myImage')
let actiontext=document.getElementById('action')
let lightOn=false

bulbImage.addEventListener('click',function(){
    if(lightOn=== false){
        bulbImage.setAttribute('src','bulbon.gif')
        lightOn=true
        actiontext.textContent='OFF'
    }
    else{
         bulbImage.setAttribute('src','bulboff.gif')
        lightOn=false

    }
})