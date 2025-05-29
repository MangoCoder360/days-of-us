function tick() {
const startDate = new Date(2025, 4, 13);
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const daysElement = document.getElementById('days');
  daysElement.textContent = diffDays;
}

document.addEventListener('DOMContentLoaded', () => {
    tick();
    setInterval(tick, 500);
});