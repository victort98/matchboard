
const startingMinutes = 15;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('timer');
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minute = Math.floor(time / 60);
  let seconds = time % 60;

countdownEl.innerHTML = `${minute}:${seconds}`;
  time--;
}