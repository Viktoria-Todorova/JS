function sumDigits(digits){
    let total=0;
    let makeStrings =digits.toString();
    

    for(let i = 0; i < makeStrings.length; i++){
         
        total += parseInt(makeStrings[i],10);
    }
    console.log(total);
    
}
sumDigits(245678)
