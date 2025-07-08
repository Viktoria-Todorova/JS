function passwordValidator(password){
    const regexCheck = /^[A-Za-z0-9]*$/g;
    const regexDigits = /\d.*\d/;
    let countFailes = 0;
    if (password.length < 6 || password.length > 10){
        console.log("Password must be between 6 and 10 characters");
        countFailes +=1;
        
        
    }

    if (regexCheck.test(password) == false){
        console.log("Password must consist only of letters and digits");
        countFailes +=1;
    }

    if(regexDigits.test(password) == false){
        console.log("Password must have at least 2 digits");
        countFailes +=1;
    }

    if (countFailes ==0){
        console.log("Password is valid");
        
    }
    

}

passwordValidator('logIn');

console.log(`-----`);

passwordValidator('MyPass123');
console.log(`-----`);
passwordValidator('Pa$s$s');