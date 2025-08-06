const loadBtnEl = document.querySelector('#load-records');
loadBtnEl.addEventListener('click', handleLoadBtn);

const ulListEl = document.getElementById('list');

const addRecordBtn = document.getElementById('add-record');
const editRecordBtn =document.getElementById('edit-record');

addRecordBtn.addEventListener('click', handleAddButton);
editRecordBtn.addEventListener('click', handleEditButton);


const nameEl = document.getElementById('p-name');
const stepsEl = document.getElementById('steps');
const calorieEl = document.getElementById('calories');
const formEl = document.querySelector('form');

async function handleLoadBtn(){

    ulListEl.innerHTML = '';

    const createRes = await fetch('http://localhost:3030/jsonstore/records/');
    const ordersData = await createRes.json();
    const orderArr = Object.values(ordersData);
    console.log(orderArr);
    
    orderArr.forEach(loadObj => {
        const liElRecords = document.createElement('li');
        liElRecords.classList.add('record'); //add all here

        const divElInfo = document.createElement('div');
        divElInfo.classList.add('info'); //add p here

        const pName = document.createElement('p');
        pName.textContent = loadObj.name;

        const pSteps = document.createElement('p');
        pSteps.textContent = loadObj.steps;

        const pCalorie= document.createElement('p');
        pCalorie.textContent = loadObj.calories;
        divElInfo.appendChild(pName);
        divElInfo.appendChild(pSteps);
        divElInfo.appendChild(pCalorie);

        const divButtons = document.createElement('div');
        divButtons.classList.add('btn-wrapper');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent ='Delete';

        divButtons.appendChild(changeBtn);
        divButtons.appendChild(deleteBtn);

        liElRecords.appendChild(divElInfo);
        liElRecords.appendChild(divButtons);
        ulListEl.appendChild(liElRecords);

        changeBtn.addEventListener('click', () => {
            document.getElementById('p-name').value = loadObj.name;
            document.getElementById('steps').value= loadObj.steps;
            document.getElementById('calories').value = loadObj.calories;
            
            liElRecords.remove();

            currentEditingId = loadObj._id; // save id for editing

            addRecordBtn.disabled = true;
            
            editRecordBtn.disabled = false;
            
        });

        deleteBtn.addEventListener('click',handleDeleteBtn);

        async function handleDeleteBtn() {
            await fetch(`http://localhost:3030/jsonstore/records/${loadObj._id}`, {
                method: 'DELETE'
            })
            await handleLoadBtn();
        }
    
    });
}

async function handleAddButton() {
    const name = nameEl.value.trim();
    const steps = stepsEl.value.trim();
    const calories = calorieEl.value.trim();

    if (!name || !steps || !calories) return;
    const createRes = await fetch('http://localhost:3030/jsonstore/records/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { name,
            steps,
            calories}
        )
    });
    formEl.reset();
    await handleLoadBtn();
    
}

async function handleEditButton() {
    const name = nameEl.value.trim();
    const steps = stepsEl.value.trim();
    const calories = calorieEl.value.trim();

    if (!name || !steps || !calories) return;
    const res = await fetch(`http://localhost:3030/jsonstore/records/${currentEditingId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name,
            steps,
            calories})
        });
        formEl.reset();
        addRecordBtn.disabled = false;
            
        editRecordBtn.disabled = true;
    await handleLoadBtn();
    
}