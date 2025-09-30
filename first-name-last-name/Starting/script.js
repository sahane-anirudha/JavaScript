let spanFirst =document.getElementById('firstName')
let spanLast =document.getElementById('lastName')

let inputFirst =document.getElementById('firstNameInput')
let inputLast =document.getElementById('lastNameInput')

inputFirst.addEventListener('input',function(){
    spanFirst.textContent= inputFirst.value
})
inputLast.addEventListener('input',function(){
    spanLast.textContent= inputLast.value
})

let button=document.getElementById('submitBtn')

button.addEventListener('click',function(){
    
})