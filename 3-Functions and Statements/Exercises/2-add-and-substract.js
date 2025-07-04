function addAndSubstract(num1,num2,num3){
    let sum = (a,b) => a+b;
    let subtract = (a,b) => a-b;

    let tempResult = sum(num1,num2);
    let finalResult = subtract(tempResult-num3)

    console.log(finalResult);
    

}

addAndSubstract(23,
6,
10
)