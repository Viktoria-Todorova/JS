function addItem() {
    const inputTextEl = document.getElementById('newItemText');
    const listOfItems = document.getElementById('items');
    const newTextItem = inputTextEl.value.trim();

    const newLiEl = document.createElement('li');

    newLiEl.textContent = newTextItem;
    listOfItems.appendChild(newLiEl);
    
    
    
}
