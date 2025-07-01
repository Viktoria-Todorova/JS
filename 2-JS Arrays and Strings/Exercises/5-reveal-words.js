function revealWords(wordsToFill,text){
    let wordsArr = wordsToFill.split(', ');
    for(const word of wordsArr){
        let wordTemplate = "*".repeat(word.length);
        text = text.replace(wordTemplate,word);
    }
    console.log(text);
    
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)