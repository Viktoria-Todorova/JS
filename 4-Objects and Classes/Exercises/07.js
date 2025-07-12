function oddOccurrences(sentence){
    let wordsCount = new Map();
    let words = sentence.toLowerCase().split(' ');

    for (const word of words){
        if (wordsCount.has(word)){
            let currentCount = wordsCount.get(word);
            wordsCount.set(word,currentCount +1)
        }else{
            wordsCount.set(word,1)
        }
     }

    let entries = wordsCount.entries()
    let result = [];
    for( let[word,occurances] of entries){
        if (occurances %2 !== 0){
            
            result.push(word);
        }
        
    }
    
    
    console.log(result.join(' '));
    
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');