let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let container = document.getElementById("buttonGrid");

alphabets.split("").forEach((letter) => {
  let button = document.createElement("button");
  button.textContent = letter;
  button.addEventListener("click", function (event) {
    playsound(event.target.innerText);
  });
  container.appendChild(button);
});
function playsound(letter) {
  let audio = new Audio(`./sounds/${letter}.wav`);
  audio.play();
}

document.body.addEventListener("keydown", function (event) {
  let pressedKey = event.key.toUpperCase(); 
    if (alphabets.includes(pressedKey)) {
        playsound(pressedKey);
    }
});
