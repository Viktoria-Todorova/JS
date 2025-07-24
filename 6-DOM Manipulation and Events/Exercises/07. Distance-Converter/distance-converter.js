document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputValueEl = document.querySelector('#inputDistance');
    const inputUnitSelector= document.querySelector('#inputUnits');
    const outputUnitSelector= document.querySelector('#outputUnits');
    const outpyutValueEl =document.querySelector('#outputDistance');
    const convertBtn =document.querySelector('#convert');

    const unitsToMeters= {
        km:1000,
        m:1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254
    }

    convertBtn.addEventListener('click', handleConversion);

    function handleConversion(e){
        const inputValue = Number(inputValueEl.value.trim());
        const inputUnir= inputUnitSelector.value;
        const ouptuUnit = outputUnitSelector.value;

        const valueInM =inputValue * unitsToMeters[inputUnir];

        const finalValue = valueInM / unitsToMeters[ouptuUnit];

        outpyutValueEl.value=finalValue;
    }
    
}