document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const allFromEl = document.querySelectorAll('form');

    const daysInputEl = document.getElementById('days-input');
    const hoursInputEl = document.getElementById('hours-input');
    const minutesInputEl = document.getElementById('minutes-input');
    const seconsdInputEl = document.getElementById('seconds-input');

    allFromEl.forEach(formEl => formEl.addEventListener('submit', handleFormSumbit));

    function handleFormSumbit(e) {
        e.preventDefault();

        const currentFormEl = e.target;
        const currentInputEl = currentFormEl.querySelector('input[type="number"]');
        const originalValue = Number(currentInputEl.value.trim());

        if (currentFormEl.id === 'days') {
            hoursInputEl.value = (originalValue * 24).toFixed(2);
            minutesInputEl.value = (originalValue * 1440).toFixed(2);
            seconsdInputEl.value = (originalValue * 86400).toFixed(2);

        } else if (currentFormEl.id === 'hours') {
            const days = originalValue / 24;
            daysInputEl.value = days.toFixed(2);
            minutesInputEl.value = (days * 1440).toFixed(2);
            seconsdInputEl.value = (days * 86400).toFixed(2);

        } else if (currentFormEl.id === 'minutes') {
            const days = originalValue / 1440;
            daysInputEl.value = days.toFixed(2);
            hoursInputEl.value = (days * 24).toFixed(2);
            seconsdInputEl.value = (days * 86400).toFixed(2);

        } else if (currentFormEl.id === 'seconds') {
            const days = originalValue / 86400;
            daysInputEl.value = days.toFixed(2);
            hoursInputEl.value = (days * 24).toFixed(2);
            minutesInputEl.value = (days * 1440).toFixed(2);
        }
    }
}
