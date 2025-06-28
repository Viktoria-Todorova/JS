function sameNumbers(numb){
    let areAllDigitsSame =true;
    let sum = 0;
    let numAsStr = String(numb);

    let firstChar = numAsStr[0];

    for (let i = 0; i <numAsStr.length; i++){
        let currentChar =numAsStr[i];
        if (currentChar !== firstChar){
            areAllDigitsSame =false;
        }

        sum += Number(currentChar);
    }

    console.log(areAllDigitsSame);
    console.log(sum);
    
    
}

sameNumbers(1234)