function stringOccurrences(text,searcheWord){

    let occurances = 0;
    let textWords = text.split(' ');
    for (let word of textWords){
        if (word == searcheWord){
            occurances ++;
        }
    }

    console.log(occurances);
    
}

stringOccurrences('This is a word and it also is a sentence','is')
stringOccurrences('softuni is great place for learning new programming languages','softuni')