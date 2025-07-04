function chargesInRange(ch1,ch2){
    let ascii1 = ch1.charCodeAt();
    let ascii2 = ch2.charCodeAt();
    let characters = [];
    let startAscii = Math.min(ascii1,ascii2);
    let endAscii = Math.max(ascii1,ascii2)
   for (let currentAsci = startAscii +1;currentAsci < endAscii;currentAsci++ ){
        let currentChar = String.fromCharCode(currentAsci);
        characters.push(currentChar)
        
        
   }
   console.log(characters.join(' '));
   
    
}

chargesInRange('a',
'd'
)

chargesInRange('#',
':'
)

chargesInRange('C',
'#'
)