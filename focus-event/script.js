let focus = document.getElementById('nameInput');
focus.focus();
onclick.onclick = function() {
    let onclick = document.getElementById('changeColor');
    focus.style.backgroundColor = 'yellow';
    // focus.style.backgroundColor = 'white';
}