document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const selectMenu = document.getElementById('menu');
    const formEl =document.querySelector('form');
    const itemTextInputEl = document.getElementById('newItemText');
    const itemValueInputEl = document.getElementById('newItemValue');
    formEl.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(e){
        e.preventDefault(); // 
        const text = itemTextInputEl.value.trim();
        const value = itemValueInputEl.value.trim();

        const optionEle =document.createElement('option');
        optionEle.textContent =text;
        optionEle.value = value;

        selectMenu.appendChild(optionEle);
        itemTextInputEl.value = '';
        itemValueInputEl.value = ''; 
    }

}