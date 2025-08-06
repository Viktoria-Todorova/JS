window.addEventListener("load", solve);

function solve() {
    const adoptBtn = document.getElementById('adopt-btn');
    adoptBtn.addEventListener('click', handleAddBtn);

    const typeEl = document.getElementById('type');
    const ageEl = document.getElementById('age');
    const genderEl = document.getElementById('gender');

    const ulAdoptEl =document.getElementById('adoption-info');//add all here
    const ulAdoptedList = document.getElementById('adopted-list');
    const form = document.querySelector('form');

    function handleAddBtn(e){
        e.preventDefault();
        const type = typeEl.value.trim();
        const age = ageEl.value.trim();
        const gender = genderEl.value;

        if(!type || !age || !gender) {
          return;
        }
        
        const liEL = document.createElement('li'); //add article,div

        const articleEl = document.createElement('article');
        const pType = document.createElement('p');
        pType.textContent = `Pet:${type}`;

        const pGender = document.createElement('p');
        pGender.textContent = `Gender:${gender}`;

        const pAge = document.createElement('p');
        pAge.textContent = `Age:${age}`;

        articleEl.appendChild(pType);
        articleEl.appendChild(pGender);
        articleEl.appendChild(pAge);
        liEL.appendChild(articleEl);

        const divBtnEl = document.createElement('div');
        divBtnEl.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', handleEditbtn);
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.addEventListener('click', handleDonebtn);
        doneBtn.textContent = 'Done';

        divBtnEl.appendChild(editBtn);
        divBtnEl.appendChild(doneBtn);

        liEL.appendChild(divBtnEl);

        ulAdoptEl.appendChild(liEL);

        typeEl.value = '';
        genderEl.value = '';
        ageEl.value = '';

        function handleEditbtn(){
            typeEl.value = type;
            genderEl.value = gender;
            ageEl.value = age;

            liEL.remove();
            
        }

        function handleDonebtn(){
            doneBtn.remove();
            editBtn.remove();
            divBtnEl.remove();

            liEL.appendChild(deleteBtn);
            ulAdoptedList.appendChild(liEL);
            

          
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('clear-btn');
        deleteBtn.textContent = 'Clear';
        deleteBtn.addEventListener('click', handleDeletebtn);

        function handleDeletebtn(){
            liEL.remove();
      
      }
      
    }
    
  }
  