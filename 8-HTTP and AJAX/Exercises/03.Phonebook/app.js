

const inputPersonEl = document.querySelector('#person');
const inputPhoneEl = document.querySelector('#phone');
const loadBtnEl = document.querySelector('#btnLoad');
const createBtnEl =document.querySelector('#btnCreate');
const phonebook = document.querySelector('#phonebook');
    



function attachEvents() {
    loadBtnEl.addEventListener('click', handleLoadBtn);
    createBtnEl.addEventListener('click', handleCreatebtn);

}

async function handleLoadBtn(){
    phonebook.innerHTML = ''; // ?
    
    

    const creareRes = await fetch('http://localhost:3030/jsonstore/phonebook');
    const getData = await creareRes.json();
    const phoneArr = Object.values(getData);
    
    
    phoneArr.forEach(elObj => {
        const liEl = document.createElement('li');
        liEl.textContent = `${elObj.person}: ${elObj.phone}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', handleDeletebtn);
        
        liEl.appendChild(deleteBtn);

        phonebook.appendChild(liEl);
        
        async function handleDeletebtn(){
            const deleteRes = await fetch(`http://localhost:3030/jsonstore/phonebook/${elObj._id}`, {
                method : 'DELETE'
            })

        const deleteData = await deleteRes.json();
        console.log(deleteData);
        
        handleLoadBtn();}
            
        
        
    })
    
    
}
async function handleCreatebtn(){
    const person = inputPersonEl.value.trim();
    const phone = inputPhoneEl.value.trim();
    

    const phonebookEl = {person,phone};

    const createPost =await fetch('http://localhost:3030/jsonstore/phonebook',{
        method: 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(phonebookEl)

    });
    const createPos = await createPost.json();
    
    inputPersonEl.value = '';
    inputPhoneEl.value = '';

    handleLoadBtn();    
}


attachEvents();