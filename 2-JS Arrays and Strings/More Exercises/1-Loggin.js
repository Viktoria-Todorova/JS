function loggin(arr){
    let username = arr.shift();
    let password = username.split('').reverse().join(''); //to reverse the username

    let currentTry =1;

    for (const passwordGuess of arr) {
        if (passwordGuess === password) {
            console.log(`User ${username} logged in.`);
            break;
        } 
        if (currentTry ===4) {
            console.log(`User ${username} blocked!`);
            break;

        }

        console.log(`Incorrect password. Try again.`);
        currentTry++;
            
}
}
loggin(['Acer','login','go','let me in','recA'])