

window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', handleAddBtn);

    const ulCheckListEl = document.getElementById('check-list'); //add here

    const contactLists = document.getElementById('contact-list');
    const form = document.querySelector('form');
    
    const nameEl = document.getElementById('name');
        const phoneEl = document.getElementById('phone');
        const categoryEl = document.getElementById('category');
        
    function handleAddBtn(e){
      e.preventDefault();
        const name = nameEl.value.trim();
        const phone = phoneEl.value.trim();
        const category = categoryEl.value;

        if(!name || !phone || !category) {
          return;
        }

        const LiEl = document.createElement('li');
        const article = document.createElement('article');

        const pName = document.createElement('p');

        pName.textContent = `name:${name}`


        const pPhone = document.createElement('p');

        pPhone.textContent = `phone:${phone}`

        const pCat = document.createElement('p');
        pCat.textContent = `category:${category.toLowerCase()}`;

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

        nameEl.value = '';
        phoneEl.value = '';
        categoryEl.value = '';

    function handleEditbtn(){
        nameEl.value = name;
        phoneEl.value =phone;
        categoryEl.value =categoryEl;

      

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
  