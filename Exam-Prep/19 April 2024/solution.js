
function solve(input){
    let spell = input.shift();
    
    
    while( input[0] != 'End'){
        const currentCommand = input.shift().split('!');
        
        if (currentCommand[0] === 'RemoveEven'){
            let curSpell = '';
            for(i = 0; i < spell.length; i += 2){
                curSpell += spell[i];
            }
            spell = curSpell;
            console.log(spell);    
        }else if(currentCommand[0] === "TakePart"){
            const fromIndex = currentCommand[1];
            const toIndex = currentCommand[2];
            spell =spell.slice(fromIndex,toIndex);
            console.log(spell);
            
        }else if(currentCommand[0] === "Reverse"){
            const substring = currentCommand[1];

            if (spell.includes(substring)){
                const index = spell.indexOf(substring);
                spell = spell.slice(0, index) + spell.slice(index + substring.length);

                // Reverse the substring
                const reversed = substring.split('').reverse().join('');

                // Append it to the end
                spell += reversed;

                console.log(spell);
            }else{
                console.log(`Error`);
                
            }
            

        }
        
    }
    console.log(`The concealed spell is: ${spell}`);
    
}

solve((["asAsl2adkda2mdaczsa", 
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"])
)