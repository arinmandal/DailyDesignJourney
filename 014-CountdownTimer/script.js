const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

let countdownTimer;
let targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Default: 7 days from now

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdownTimer);
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  if (!countdownTimer) {
    countdownTimer = setInterval(updateCountdown, 1000);
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(countdownTimer);
  countdownTimer = null;
  targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  updateCountdown();
});

updateCountdown();