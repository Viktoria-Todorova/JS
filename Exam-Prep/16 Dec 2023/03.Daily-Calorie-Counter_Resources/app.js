const serverLink = `http://localhost:3030/jsonstore/tasks/`;

const loadBtn = document.getElementById('load-meals');
loadBtn.addEventListener('click', handleLoadBtn);

const divElement = document.getElementById('list');//add all here final

const addBtn = document.getElementById('add-meal');
const editBtn = document.getElementById('edit-meal');

addBtn.addEventListener('click', handleAddMealBtn);
editBtn.addEventListener('click', handleEditMealBtn);


const foodEl = document.getElementById('food');
const timeEl = document.getElementById('time');
const caloriesEl = document.getElementById('calories');

const formEl = document.querySelector('form');
////!!!!!!
let currentEditingId = null;


async function handleLoadBtn(){

    divElement.innerHTML = '';  // clear old entries
    const createRes = await fetch(serverLink);
    const ordersData = await createRes.json();
    const orderArr = Object.values(ordersData);
    console.log(orderArr);

    orderArr.forEach(mealObj => {
        const divMeal = document.createElement('div');
        divMeal.classList.add("meal"); //add all here

        const h2El =document.createElement('h2');
        h2El.textContent = mealObj.food;

        const h3El = document.createElement('h3');
        h3El.textContent=mealObj.time;

        const h3El2 = document.createElement('h3');
        h3El2.textContent=mealObj.calories;

        divMeal.appendChild(h2El);
        divMeal.appendChild(h3El);
        divMeal.appendChild(h3El2);

        const divBtns = document.createElement('div');
        divBtns.id = 'meal-buttons';

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-meal');
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', handleChangeBtn);

        function handleChangeBtn(){
            document.getElementById('food').value = mealObj.food;
            document.getElementById('time').value =mealObj.time;
            document.getElementById('calories').value=mealObj.calories;
            divMeal.remove();
            currentEditingId = mealObj._id;

            editBtn.disabled =false;
            addBtn.disabled = true;
            
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-meal');
        deleteBtn.textContent ='Delete';
        deleteBtn.addEventListener('click', handleDeleteBtn);

        async function handleDeleteBtn(){
            await fetch(`${serverLink}${mealObj._id}`, {
                method: 'DELETE'
            })
            await handleLoadBtn();
        }

        divBtns.appendChild(changeBtn);
        divBtns.appendChild(deleteBtn);

        divMeal.appendChild(divBtns);
        divElement.appendChild(divMeal);

    })
}

async function handleAddMealBtn(e) {
    e.preventDefault();

    const food = foodEl.value.trim();
    const time = timeEl.value.trim();
    const calories = caloriesEl.value.trim();

    if (!food || !time || !calories) return;

    const createRes = await fetch(serverLink, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { food,
            time,
            calories}
        )
    });
    formEl.reset();

    await handleLoadBtn();
}

async function handleEditMealBtn() {
    const food = foodEl.value.trim();
    const time = timeEl.value.trim();
    const calories = caloriesEl.value.trim();

    if (!food || !time || !calories) return;

    const res = await fetch(`${serverLink}${currentEditingId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  food,
            time,
            calories })
        });
    
    formEl.reset();
    editBtn.disabled =true;
    addBtn.disabled = false;
    await handleLoadBtn();
}