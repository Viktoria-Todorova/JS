const loadAppointmentsBtn = document.getElementById('load-appointments');
loadAppointmentsBtn.addEventListener('click', handleLoadAppoitnemts);

const appoitmentList = document.getElementById('appointments-list');

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


        const deletebtn = 
        function handleChangeBtn(){
            console.log(`change btn`);
            
        };

    })

}