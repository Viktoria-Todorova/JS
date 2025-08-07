const loadAppointmentsBtn = document.getElementById('load-appointments');
loadAppointmentsBtn.addEventListener('click', handleLoadAppoitnemts);

const appoitmentList = document.getElementById('appointments-list');


const addAppointmentBtn = document.getElementById('add-appointment');
addAppointmentBtn.addEventListener('click', handleAddBtn);
const editAppoitmetBtn = document.getElementById('edit-appointment');
editAppoitmetBtn.addEventListener('click', handleEditBtn);

const carModelEl = document.getElementById('car-model');
const serviceEl = document.getElementById('car-service');
const dateEl = document.getElementById('date');
const formEl = document.querySelector('form');
let currentEditingId = null;
async function handleLoadAppoitnemts(){
    appoitmentList.innerHTML = '';

    const createRes = await fetch('http://localhost:3030/jsonstore/appointments/');
    const ordersData = await createRes.json();
    const orderArr = Object.values(ordersData);
    console.log(orderArr);

    orderArr.forEach(orerObj => {
        const liAppoitmentsEl = document.createElement('li'); //add all here
        liAppoitmentsEl.classList.add('appointment');

        const h2El =document.createElement('h2');
        h2El.textContent = orerObj.model;

        const h3Date = document.createElement('h3');
        h3Date.textContent =orerObj.date;

        const h3Type = document.createElement('h3');
        h3Type.textContent=orerObj.service;

        liAppoitmentsEl.appendChild(h2El);
        liAppoitmentsEl.appendChild(h3Date);
        liAppoitmentsEl.appendChild(h3Type);

        const divElButtons = document.createElement('div');// add buttons here
        divElButtons.classList.add('buttons-appointment');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', handleChangeBtn);


        const deletebtn = document.createElement('button');
        deletebtn.classList.add('delete-btn');
        deletebtn.textContent = 'Delete';
        deletebtn.addEventListener('click', handleDeleteBtn);

        divElButtons.appendChild(changeBtn);
        divElButtons.appendChild(deletebtn);

        liAppoitmentsEl.appendChild(divElButtons);
        appoitmentList.appendChild(liAppoitmentsEl);

        function handleChangeBtn(){
            document.getElementById('car-model').value=orerObj.model;
            document.getElementById('car-service').value= orerObj.service;
            document.getElementById('date').value=orerObj.date;

            liAppoitmentsEl.remove();

            currentEditingId = orerObj._id;
            editAppoitmetBtn.disabled = false;
            addAppointmentBtn.disabled =true;

            
        };

        

        async function handleDeleteBtn() {
            await fetch(`http://localhost:3030/jsonstore/appointments/${orerObj._id}`, {
                method: 'DELETE'
            })
            await handleLoadAppoitnemts();
        }

    })

}

async function handleAddBtn() {
    const model = carModelEl.value.trim();
    const service = serviceEl.value.trim();
    const date = dateEl.value.trim();

    if (!model || !service || !date) return;

    const createRes = await fetch('http://localhost:3030/jsonstore/appointments/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { model,
            service,
            date}
        )
    });
    formEl.reset();
    await handleLoadAppoitnemts();
    
}

async function handleEditBtn() {
     const model = carModelEl.value.trim();
    const service = serviceEl.value.trim();
    const date = dateEl.value.trim();

    if (!model || !service || !date) return;
    const createRes = await fetch(`http://localhost:3030/jsonstore/appointments/${currentEditingId}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { model,
            service,
            date}
        )
    });
    editAppoitmetBtn.disabled = true;
    addAppointmentBtn.disabled =false;
    formEl.reset();
    await handleLoadAppoitnemts();
    
}