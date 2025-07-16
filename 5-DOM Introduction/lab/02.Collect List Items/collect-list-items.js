function extractText() {
    let elements = document.querySelectorAll('li'); //select list items
    let textareEl =document.getElementById('result'); //select textarea

    for(const el of elements){ //iterate through each list item
        const elText = el.textContent; // we read it's text
        textareEl.textContent  +=elText + '\n' //add it to the text in text area
    }
    
}