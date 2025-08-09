function wordsUppercase(inputText){
    const finalWords = [];

    let words = inputText.split(/[^a-zA-Z]+/);

    for (let word of words) {
        if(word.length > 0){  // skip empty strings from consecutive punctuation
            finalWords.push(word.toUpperCase());
        }
    }
    
    console.log(finalWords.join(', '));
     
        
    
}

wordsUppercase('Functions in JS can be nested, i.e. hold other functions')