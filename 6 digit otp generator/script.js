let digit='0123456789'
let randomIndex=Math.floor(Math.random()*10)
let randomChar=digit[randomIndex]
// console.log(randomChar);
let otp=randomChar
for(let i=0;i<5;i++){
    let randomIndex=Math.floor(Math.random()*10)
    let randomChar=digit[randomIndex]
    otp+=randomChar
}
console.log(otp);