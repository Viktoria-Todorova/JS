function listOfNames(arr){
    let sortNames = arr.sort((a, b) => a.localeCompare(b));
    
    
    for(let i=0; i< sortNames.length;i++){
        console.log(`${i+1}.${sortNames[i]}`);
        
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])