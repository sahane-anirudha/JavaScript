let hexDigits = '0123456789ABCDEF';
let button = document.getElementById('btn');
let color = document.querySelector('.color');   
button.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexDigits[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
function getRandomNumber() {
    return Math.floor(Math.random() * hexDigits.length);
}
