function makeAdictionary(json){
    let finalDictionary = {};
    for (let jsonArr of json ){
        let myObj=JSON.parse(jsonArr);
        for (let [word,dictionary] of Object.entries(myObj)){
            if(word in finalDictionary){
                finalDictionary[word] = dictionary;
            }else{
                finalDictionary[word] = dictionary;
            }
        }
        
    }
    let entries = Object.entries(finalDictionary);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    for (const [term,definition] of entries){
        console.log(`Term: ${term} => Definition: ${definition}`);
        
    }
    
    
}

makeAdictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)
