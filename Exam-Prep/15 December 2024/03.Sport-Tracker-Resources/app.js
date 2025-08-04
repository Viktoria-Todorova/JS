
const loadWorkBtn = document.getElementById('load-workout');
loadWorkBtn.addEventListener('click', getAllWorkouts);

const divListEl = document.getElementById('list');

const addWorkoutBtn = document.getElementById('add-workout');
addWorkoutBtn.addEventListener('click', handleAddWorkout);

const editWorkoutBtn = document.getElementById('edit-workout');
editWorkoutBtn.addEventListener('click', handleEditBtn); 

const workoutEl = document.getElementById('workout');
const locationEl = document.getElementById('location');
const dateEl = document.getElementById('date');
const formEl = document.querySelector('form');

//formEl.addEventListener('submit',handleAddWorkout)
let currentEditingId = null;

async function getAllWorkouts(){
    divListEl.innerHTML = '';
    const res = await fetch('http://localhost:3030/jsonstore/workout/');
    const ordersData = await res.json();
    const orderArr = Object.values(ordersData);
    console.log(orderArr);
    
    orderArr.forEach( orderObj => {
        const divContainer = document.createElement('div');
        divContainer.classList.add('container'); //add all here

        const h2El = document.createElement('h2');
        h2El.textContent = orderObj.workout;

        const h3Date= document.createElement('h3');
        h3Date.textContent =orderObj.date;

        const h3Loc = document.createElement('h3');
        h3Loc.classList.add('location');
        h3Loc.textContent = orderObj.location;

        divContainer.appendChild(h2El);
        divContainer.appendChild(h3Date);
        divContainer.appendChild(h3Loc);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.id = 'buttons-container'; //add buttons here

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent = 'Change'
        changeBtnEl.addEventListener('click', handleChangeBtn);


        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Done';
        deleteBtn.addEventListener('click', handleDeleteBtn);

        buttonsContainer.appendChild(changeBtnEl);
        buttonsContainer.appendChild(deleteBtn);

        divContainer.appendChild(buttonsContainer);
    
        divListEl.appendChild(divContainer);

        function handleChangeBtn(){
            workoutEl.value = orderObj.workout;
            locationEl.value = orderObj.location;
            dateEl.value = orderObj.date;
            divContainer.remove();

            currentEditingId = orderObj._id; //!
            
            editWorkoutBtn.disabled = false;
            addWorkoutBtn.disabled = true;
        }

        async function handleDeleteBtn(){
           await fetch(`http://localhost:3030/jsonstore/workout/${orderObj._id}`, {
                method: 'DELETE'
            })
            await getAllWorkouts();
         }

    })
    
}

async function handleAddWorkout(e){
    //e.preventDefault();

    const workout =workoutEl.value.trim();
    const location = locationEl.value.trim();
    const date = dateEl.value.trim();

    if(!workout || !location || !date) return;

    const createRes = await fetch('http://localhost:3030/jsonstore/workout/',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { workout,
            location,
            date
           }
        )
    });
    formEl.reset();
    const createData = await createRes.json();

    await getAllWorkouts();

     
}
async function handleEditBtn(){
    const workout =workoutEl.value.trim();
    const location = locationEl.value.trim();
    const date = dateEl.value.trim();

    if(!workout || !location || !date) return;
    const createRes = await fetch(`http://localhost:3030/jsonstore/workout/${currentEditingId}`,{
        method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({workout,location,date})
    });

    formEl.reset(); //
    editWorkoutBtn.disabled = true;
    addWorkoutBtn.disabled = false;
    currentEditingId = null;
    await getAllWorkouts();

}