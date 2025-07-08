function tick() {
  const startDate = new Date(2025, 4, 13);
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const daysElement = document.getElementById('days');
  daysElement.textContent = diffDays;

  const weeksElement = document.getElementById('weeks');
  const diffWeeks = Math.floor(diffDays / 7);
  weeksElement.textContent = diffWeeks + " weeks";
  const monthsElement = document.getElementById('months');
  const diffMonths = Math.floor(diffDays / 30);
  monthsElement.textContent = diffMonths + " months";
}

document.addEventListener('DOMContentLoaded', () => {
    tick();
    setInterval(tick, 500);
});