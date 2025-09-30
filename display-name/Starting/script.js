let inputbox=document.getElementById('nameInput')
let spantext =document.getElementById('name')

inputbox.addEventListener('input',function(){
    spantext.textContent=inputbox.value
})

