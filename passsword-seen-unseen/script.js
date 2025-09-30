

let passimg = document.getElementById('eyeicon')
let password = document.getElementById('password')
let visible = false 
passimg.addEventListener('click', function(){
    if(visible === false){
        password.setAttribute('type','text')
        visible = true
        passimg.setAttribute('src','eye-open.png')
    }
    else{
        password.setAttribute('type','password')
        visible = false
        passimg.setAttribute('src','eye-close.png')
    }
})