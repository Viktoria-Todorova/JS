

window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', handleAddBtn);

    const ulCheckListEl = document.getElementById('check-list'); //add here

    const contactLists = document.getElementById('contact-list');
    const form = document.querySelector('form');

    function handleAddBtn(e){
      e.preventDefault();
        const nameEl = document.getElementById('name').value.trim();
        const phoneEl = document.getElementById('phone').value.trim();
        const categoryEl = document.getElementById('category');

        if(!nameEl || !phoneEl || !categoryEl.value) {
          return;
        }

        const LiEl = document.createElement('li');
        const article = document.createElement('article');

        const pName = document.createElement('p');

        pName.textContent = `name:${nameEl}`


        const pPhone = document.createElement('p');

        pPhone.textContent = `phone:${phoneEl}`

        const pCat = document.createElement('p');
        const selectedText = categoryEl.value;
        pCat.textContent = `category:${selectedText.toLowerCase()}`;

        article.appendChild(pName);
        article.appendChild(pPhone);
        article.appendChild(pCat);
        LiEl.appendChild(article);

        const divBtnEl = document.createElement('div');
        divBtnEl.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', handleEditbtn);

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.addEventListener('click', handleSavebtn);

        divBtnEl.appendChild(editBtn);
        divBtnEl.appendChild(saveBtn);
        LiEl.appendChild(divBtnEl);

        ulCheckListEl.appendChild(LiEl);

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('category').value = '';

    function handleEditbtn(){
        document.getElementById('name').value = nameEl;
        document.getElementById('phone').value =phoneEl;
        document.getElementById('category').value =categoryEl.value;

      

       LiEl.remove();

    }

    //After editing the information, add a new item to the <ul> with the updated information.
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('del-btn');
    deleteBtn.addEventListener('click', handleDeletebtn);

    function handleSavebtn(){
      editBtn.remove();
      saveBtn.remove();
      divBtnEl.remove();
      
      contactLists.appendChild(LiEl);
      LiEl.appendChild(deleteBtn);
    }

    function handleDeletebtn(){
        LiEl.remove();
      
    }

    form.reset();
    }


    
  }
  