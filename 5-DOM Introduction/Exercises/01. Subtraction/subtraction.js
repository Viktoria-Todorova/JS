function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum= document.getElementById('secondNumber');
    const resultPlace = document.getElementById('result');

    let num1 = Number(firstNum.value);
    let num2 = Number(secondNum.value);

    let result = num1 -num2;
    resultPlace.textContent = result;
    

}
