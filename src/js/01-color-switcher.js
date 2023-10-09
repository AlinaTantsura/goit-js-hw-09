const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

btnStop.setAttribute('disabled', 'disabled');
btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);

function startTimer() {
   timerId  = setInterval(changeBackgroundColor, 1000);
    btnStart.setAttribute('disabled', 'disabled');
    btnStop.removeAttribute('disabled');
}
function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function stopTimer() {
    clearInterval(timerId);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', 'disabled');
}