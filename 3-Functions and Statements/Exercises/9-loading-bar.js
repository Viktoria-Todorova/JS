function loadingBar(num){
    let repeatedPerse = '%'.repeat(num/10);
    let repeatDots = '.'.repeat(10-(num/10))
    
    
    if (num < 100){
        console.log(`${num}% [${repeatedPerse}${repeatDots}]`);
        console.log(`Still loading...`);
        
    }else{
        console.log(`100% Complete!`);
        console.log(`[${repeatedPerse}${repeatDots}]`);
        
    }
    
}

loadingBar(30);
console.log(`------`);

loadingBar(50);
console.log(`------`);
loadingBar(100);