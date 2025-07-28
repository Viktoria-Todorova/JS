window.addEventListener("load", solve);

function solve() {
      const addBtn = document.getElementById('add-btn');
      const laptopContainer = document.getElementById('check-list');
      const laptopList = document.getElementById('laptops-list');
      const form = document.querySelector('.laptop-info');

      addBtn.addEventListener('click', handleAddLaptop);

      function handleAddLaptop(e) {
        e.preventDefault();

        const laptopModel =document.getElementById('laptop-model').value.trim();
        const laptopeStorage = document.getElementById('storage').value.trim();
        const laptopPrice = document.getElementById('price').value.trim();

        if (!laptopModel || !laptopeStorage || !laptopPrice) {
          return;
        }

        let listItem = document.createElement('li');
        listItem.classList.add('laptop-item');

        const article = create('article', [
            create('p', [`${laptopModel}`]),
            create('p', [`Memory: ${laptopeStorage} TB`]),
            create('p', [`Price: ${laptopPrice}$`])
        ]);
        listItem.appendChild(article);

        const editBtn = create('button', ['edit']);
        editBtn.className= 'edit btn';
        listItem.appendChild(editBtn);

        const okBtn = create('button', ['ok']);
        okBtn.className= 'ok btn';
        listItem.appendChild(okBtn);

        addBtn.disabled = true;

        editBtn.addEventListener('click', () => {
            document.getElementById('laptop-model').value = laptopModel;
            document.getElementById('storage').value = laptopeStorage;
            document.getElementById('price').value = laptopPrice;

            addBtn.disabled = false;

            laptopContainer.replaceChildren();
        });

        okBtn.addEventListener('click', () => {
          
          editBtn.remove();
          okBtn.remove();
          laptopList.appendChild(listItem);        
            addBtn.disabled = false;
      });

      laptopContainer.appendChild(listItem);
      

      form.reset(); // Reset the form inputs after adding the laptop
  }
    const clearBtn = document.querySelector('.btn.clear');
    clearBtn.addEventListener('click', ()=>{
        laptopList.replaceChildren();
    })
        

    // Helper function to create an HTML element
    function create(tagName, content) {
    let element = document.createElement(tagName); // Create the element (e.g., 'p', 'li', 'button')

    for (let child of content) {
      // If the child is a DOM element (e.g., <strong>), append it directly
      if (typeof child === 'object') {
        element.appendChild(child);
      } else {
        // Otherwise, treat it as text and create a text node
        let node = document.createTextNode(child);
        element.appendChild(node);
      }
    }

    return element; // Return the constructed DOM element
  }
}
