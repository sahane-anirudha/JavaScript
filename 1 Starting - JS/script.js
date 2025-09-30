let alphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digits = "0123456789";
let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
let password = "";

let characters = alphabet + upperCase + digits + symbols;
let inputbox = document.getElementById("password");

let button = document.querySelector("button");

button.addEventListener ("click",function()){
  inputbox.value = password;
  
}


password = password + alphabet[Math.floor(Math.random() * alphabet.length)];
password = password + digits[Math.floor(Math.random() * digits.length)];
password = password + symbols[Math.floor(Math.random() * symbols.length)];
password = password + upperCase[Math.floor(Math.random() * upperCase.length)];

for (let i = 1; i <= 6; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);
  password = password + characters[randomIndex];
}
console.log(password);
