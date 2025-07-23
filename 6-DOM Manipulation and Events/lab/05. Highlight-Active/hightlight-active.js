document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const alllDivs = document.querySelectorAll('input');

    alllDivs.forEach(input => {
        input.addEventListener('focus',() => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
    
}
