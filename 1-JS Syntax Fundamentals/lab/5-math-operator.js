function mathOperator(num1,num2,oper){
    if (oper === '+') {
    console.log(num1 + num2);
    } else if (oper === '-') {
        console.log(num1 - num2);
    } else if (oper === '*') {
        console.log(num1 * num2);
    } else if (oper === '/') {
        console.log(num1 / num2);
    } else if (oper === '%') {
        console.log(num1 % num2);
    } else if (oper === '**') {
        console.log(num1 ** num2);
    } 
}

mathOperator(5, 6, '+')