function modernTimes(text){
    let hashWords = text.split(' ').filter(w => w.startsWith('#') && w.length > 1);
    for (const hashword of hashWords) {
        let word=hashword.substring(1);
        let pattern = /^[a-zA-Z]+$/;
        if (pattern.test(word)) {
            console.log(word);
        } 
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')