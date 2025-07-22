function addItem() {
    const inputTextEl = document.getElementById('newItemText');
    let listOfItems = document.getElementById('items');
    const newItemText = inputTextEl.value.trim();

    const newLiEl = document.createElement('li');
    newLiEl.textContent = newItemText;
    listOfItems.appendChild(newLiEl);
    
    
}
