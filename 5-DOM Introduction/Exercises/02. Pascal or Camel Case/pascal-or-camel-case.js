function solve() {
    let textInput = document.getElementById('text');
    let typeOfTextInput = document.getElementById('naming-convention');
    const resultSpanEl = document.getElementById('result');
   
    const texttoConvert = textInput.value.trim().toLowerCase(); //to remove spaces
    const namigConvention = typeOfTextInput.value.trim();
    const words = texttoConvert.split(' ');
    

    if(namigConvention === 'Camel Case'){
        resultSpanEl.textContent = words[0]+ words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
    }else if(namigConvention === 'Pascal Case'){
        resultSpanEl.textContent = words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
    }else{
        resultSpanEl.textContent = 'Error!'
    }
    
} 