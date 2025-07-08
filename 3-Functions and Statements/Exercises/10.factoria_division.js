function factorialDivision(num1,num2){
    let factFirstNum = factorialNum(num1);
    let factorialSecond =factorialNum(num2);

    function factorialNum(number){
        let sum = 1;
        for (i=1;i<=number;i++){
            sum *=i;
        }
        return sum;
    }
    
    let factorialDivision = factFirstNum/factorialSecond
    console.log(`${factorialDivision.toFixed(2)}`);
    
    
    
}

factorialDivision(5,2);
factorialDivision(6,2);