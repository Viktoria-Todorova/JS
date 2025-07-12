function wordsTracker(arr){
    let wordsToSearsh = arr.shift().split(' ');
    let countWords = {}

    for (const word of wordsToSearsh){
        countWords[word] = 0;
    }
    
    for (const curWord of arr){
        if( wordsToSearsh.includes(curWord)){
            countWords[curWord] +=1;
            
        }
    }

    let entries = Object.entries(countWords);

    entries.sort((a,b) => b[1]-a[1])
    for(const [word,count] of entries){
        console.log(`${word} - ${count}`);
        
    }
    
    
    
}

wordsTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)
console.log(`-----`);

wordsTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)
