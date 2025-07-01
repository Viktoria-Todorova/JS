function stringSubstring(searchedWord,text){
    let textWord =text.toLowerCase().split(' ');
    if (textWord.includes(searchedWord)){
        console.log(searchedWord);
        
    }else{
        console.log(`${searchedWord} not found!`);
        
    }

}

stringSubstring('javascript',
'JavaScript is the best programming language'
)