function palindromeIntegers(arr){
    for(let varriable of arr){
        
        checkIfPalindrome(varriable);
    }

    function checkIfPalindrome(num){
        let numToString = String(num);
        let reversed = numToString.split('').reverse().join('');
        if (reversed == numToString){
            console.log(`true`);
            
        }else{
            console.log(`false`);
            
        }
        
        

    }
}

palindromeIntegers([123,323,421,121])
console.log(`-------`);

palindromeIntegers([32,2,232,1010])