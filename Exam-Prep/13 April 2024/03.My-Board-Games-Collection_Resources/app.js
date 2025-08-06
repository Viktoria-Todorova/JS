const loadGameBtn = document.getElementById('load-games');

const divBoardGameslist =document.getElementById('games-list');

loadGameBtn.addEventListener('click', handleLoadBtn);


const addGameBtn = document.getElementById('add-game');
addGameBtn.addEventListener('click', handleAddGameBtn);

const editGameBtn = document.getElementById('edit-game');
editGameBtn.addEventListener('click', handeEditBtn);

const nameEl = document.getElementById('g-name');
const typeEl= document.getElementById('type');
const playersEl = document.getElementById('players');

const formEl = document.querySelector('form');

let currentEditingId = null;
async function handleLoadBtn() {
    divBoardGameslist.innerHTML = '';
    const createRes = await fetch('http://localhost:3030/jsonstore/games/');
    const ordersData = await createRes.json();
    const orderArr = Object.values(ordersData);
    //console.log(orderArr);

    orderArr.forEach(orderObj => {
        const divClassBoardGame = document.createElement('div'); //add all here
        divClassBoardGame.classList.add('board-game');

        const divContainer = document.createElement('div');
        divContainer.classList.add('content');//add p elements

        const pName = document.createElement('p');
        pName.textContent = orderObj.name;

        const pPlayers = document.createElement('p');
        pPlayers.textContent = orderObj.players;

        const pType = document.createElement('p');
        pType.textContent = orderObj.type;

        divContainer.appendChild(pName);
        divContainer.appendChild(pPlayers);
        divContainer.appendChild(pType);

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons-container');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent ='Delete';

        divButtons.appendChild(changeBtn);
        divButtons.appendChild(deleteBtn);

        divClassBoardGame.appendChild(divContainer);
        divClassBoardGame.appendChild(divButtons);

        divBoardGameslist.append(divClassBoardGame);

        changeBtn.addEventListener('click', () => {
            document.getElementById('g-name').value = orderObj.name;
            document.getElementById('type').value= orderObj.type;
            document.getElementById('players').value = orderObj.players;
            
            divClassBoardGame.remove();

            currentEditingId = orderObj._id; // save id for editing

            addGameBtn.disabled = true;
            
            editGameBtn.disabled = false;
            
        });

        deleteBtn.addEventListener('click',handleDeleteBtn);

        async function handleDeleteBtn() {
            await fetch(`http://localhost:3030/jsonstore/games/${orderObj._id}`, {
                method: 'DELETE'
            })
            await handleLoadBtn();
        }
    })
}

async function handleAddGameBtn() {
    const name = nameEl.value.trim();
    const type = typeEl.value.trim();
    const players = playersEl.value.trim();

    if (!name || !type || !players) return;
    const createRes = await fetch('http://localhost:3030/jsonstore/games/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { name,
            type,
            players}
        )
    });
    formEl.reset();
    await handleLoadBtn();

}

async function handeEditBtn() {
     const name = nameEl.value.trim();
    const type = typeEl.value.trim();
    const players = playersEl.value.trim();

    if (!name || !type || !players) return;
    const res = await fetch(`http://localhost:3030/jsonstore/games/${currentEditingId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name,
            type,
            players})
        });
        formEl.reset();
        addGameBtn.disabled = false;
            
        editGameBtn.disabled = true;
    await handleLoadBtn();
    
}