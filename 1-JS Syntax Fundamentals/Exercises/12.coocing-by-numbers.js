function coocingByNumber(number,op1,op2,op3,op4,op5){
    let operations = [op1,op2,op3,op4,op5];
    let currentNum = Number(number);
    

    for (let i =0; i <= operations.length-1;i++){
        currentOperation = operations[i];

        if (currentOperation == 'chop'){
            currentNum /=2;
            
        }else if (currentOperation == 'dice'){
            currentNum = Math.sqrt(currentNum);
            
            
        }else if(currentOperation == 'spice'){
            currentNum +=1;
            
        }else if(currentOperation == 'fillet'){
            currentNum *= 0.80;
        }
        else if(currentOperation == 'bake'){
            currentNum *=3;
        }
        console.log(currentNum);
        
    }
}

coocingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('-----');

coocingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet')