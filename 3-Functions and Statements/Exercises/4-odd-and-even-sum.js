function calcoddEvenSum(num){
    let evenSum = 0;
    let oddSum = 0;

    let numAsStrin = String(num);

    for (let i=0; i< numAsStrin.length; i++){
        let digit = Number(numAsStrin[i]);
        if (digit %2 == 0){
            evenSum +=digit
        }else{
            oddSum +=digit
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}

console.log(calcoddEvenSum(1000435));
 