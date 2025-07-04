function simpleCalculator(num1,num2,op){
    let result = 0;
    let add = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    let multiply = (a,b) => a*b;
    let divide = (a,b) => a/b;
    switch(op){
        case 'add':
            result = add(num1,num2)
            break;
        case 'subtract':
            result = subtract(num1,num2)
            break;
        case 'multiply':
            result = multiply(num1,num2)
            break;
        case 'divide':
            result = divide(num1,num2)
            break;
    }
    console.log(result);
    
}

simpleCalculator(5,
5,
'multiply'
)