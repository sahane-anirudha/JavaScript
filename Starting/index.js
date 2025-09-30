let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let button = document.getElementById('btn');
let color = document.querySelector('.color');
button.addEventListener('click', function() {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


