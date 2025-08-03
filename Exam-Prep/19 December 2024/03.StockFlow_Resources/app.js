//1
const loadAllOrdersBtn = document.getElementById('load-orders');
loadAllOrdersBtn.addEventListener('click', handleLoadAllOrders);

const divContainerList = document.getElementById('list'); //add all elements

//Create an Order
const formEl = document.querySelector('form');
//const orderBtn = document.getElementById('order-btn');
//orderBtn.addEventListener('submit', handleOrderBtn);

formEl.addEventListener('submit', handleOrderBtn);

//

const nameEl = document.getElementById('name');
const quantityEL = document.getElementById('quantity');
const dateEl = document.getElementById('date');


//

const editOrderBtn = document.getElementById('edit-order');
const orderBtn = document.getElementById('order-btn');
editOrderBtn.addEventListener('click', handleEditBtn);
let currentEditingId = null;


async function handleLoadAllOrders(){

    divContainerList.innerHTML = '';  // clear old entries
    const createRes = await fetch('http://localhost:3030/jsonstore/orders/');
    const ordersData = await createRes.json();
    const orderArr = Object.values(ordersData);
    console.log(orderArr);
    
    orderArr.forEach(orderObj => {
        const divContainer = document.createElement('div'); //add the next elements here
        divContainer.classList.add('container');

        const h2Element = document.createElement('h2');
        h2Element.textContent = orderObj.name;

        const h3ElDate = document.createElement('h3');
        h3ElDate.textContent = orderObj.date;

        const h3ElValue =document.createElement('h3');
        h3ElValue.textContent = orderObj.quantity;

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', handleChangebtn);

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', handledoneBtn);


        divContainer.appendChild(h2Element);
        divContainer.appendChild(h3ElDate);
        divContainer.appendChild(h3ElValue);
        divContainer.appendChild(changeBtn);
        divContainer.appendChild(doneBtn);

        divContainerList.appendChild(divContainer);


        function handleChangebtn(){
            document.getElementById('name').value =  orderObj.name;
            document.getElementById('quantity').value= orderObj.quantity;
            document.getElementById('date').value = orderObj.date;
            
            divContainer.remove();

            currentEditingId = orderObj._id; // save id for editing

            editOrderBtn.disabled = false;
            
            orderBtn.disabled = true;
            
            
        }

        async function handledoneBtn(){
           await fetch(`http://localhost:3030/jsonstore/orders/${orderObj._id}`, {
                method: 'DELETE'
            })
            await handleLoadAllOrders();
         }
        
        
        //[Edit order] button should be deactivated

    })
    
}

async function handleOrderBtn(e){
    e.preventDefault();
    const name = nameEl.value.trim();
    const quantity = quantityEL.value.trim();
    const date = dateEl.value.trim();

    if (!name || !quantity || !date) return;

    const createRes = await fetch('http://localhost:3030/jsonstore/orders/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { name,
            quantity,
            date}
        )
    });

    formEl.reset();
    

    const createData = await createRes.json();
    await handleLoadAllOrders();
}

async function handleEditBtn(){
        const name = nameEl.value.trim();
        const quantity =quantityEL.value.trim();
        const date = dateEl.value.trim();

        if (!name || !quantity || !date) return;

        const res = await fetch(`http://localhost:3030/jsonstore/orders/${currentEditingId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, quantity, date })
        });

        formEl.reset();
        editOrderBtn.disabled = true;
        orderBtn.disabled = false;

        await handleLoadAllOrders();
}

