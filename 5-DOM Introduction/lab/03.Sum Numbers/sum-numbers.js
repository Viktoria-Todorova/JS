function calc() {
    const firstEl = document.getElementById('num1');
    const secontEl =document.getElementById('num2');
    const sumEl = document.getElementById('sum');

    const num1 = Number(firstEl.value);
    const num2 = Number(secontEl.value);

    let finalSum = num1 + num2;
    sumEl.value =finalSum;

    
}