document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showMoreBtn = document.querySelectorAll('button');
    showMoreBtn.forEach(btEl => btEl.addEventListener ('click', handleControShow));


    function handleControShow(e){
        const fullProFDivEl = e.target.parentElement; //or clossest class 

        const lockedBtnEl = fullProFDivEl.querySelector('input[type="radio"]');
        if (lockedBtnEl.checked){
            return; //ends the function
        }
        const infoDivEl = fullProFDivEl.querySelector('#hidden-fields');
        if (infoDivEl.style.display === 'none'){
            infoDivEl.style.display ='block';
            e.target.textContent = 'Show less';
        }else{
            infoDivEl.style.display ='none';
            e.target.textContent = 'Show more';
        }
         
    }
}