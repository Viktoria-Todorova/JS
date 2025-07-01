function consoredWords(text,wordToCensor){
    let starTemplate = '*'.repeat(wordToCensor.length);
    let finalText = text.replaceAll(wordToCensor,starTemplate);
    console.log(finalText);
    
}

consoredWords('A small sentence with some words', 'small')
consoredWords('Find the hidden word', 'hidden')