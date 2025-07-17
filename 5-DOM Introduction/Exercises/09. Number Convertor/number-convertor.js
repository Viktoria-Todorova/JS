function solve() {
    const numberInputEl = document.getElementById('input');
    const slecTmENUfROMeL = document.getElementById('selectMenuTo');
    const resultInputEl =document.getElementById('result');

    const num =Number(numberInputEl.value.trim());
    const convertionUnit = slecTmENUfROMeL.value;

    if (convertionUnit === 'binary'){
        resultInputEl.value += num.toString(2);
    }else if(convertionUnit === 'hexadecimal'){
        resultInputEl.value += num.toString(16).toUpperCase();
    }
}