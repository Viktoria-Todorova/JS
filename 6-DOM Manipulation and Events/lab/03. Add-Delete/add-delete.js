function addItem() {
    const inputTextEl = document.getElementById('newItemText');
    const listOfItems = document.getElementById('items');
    const newTextItem = inputTextEl.value.trim();

    const newLiEl = document.createElement('li');

    newLiEl.textContent = newTextItem;
    const deleteAel = document.createElement('a');
    deleteAel.textContent = '[Delete]';
    deleteAel.href = '#';
    deleteAel.addEventListener('click',handleDelete);

    function handleDelete(){
        newLiEl.remove();
    }
    newLiEl.appendChild(deleteAel);

    listOfItems.appendChild(newLiEl);
    
    
    
}
