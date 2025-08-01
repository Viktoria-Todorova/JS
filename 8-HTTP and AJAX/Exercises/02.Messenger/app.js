 const messagestextAreaEl = document.querySelector('#messages');
    const authorInputEl = document.querySelector('input[name ="author"]');
    const contentInputEl = document.querySelector('input[name ="content"]');
    const submitInputEl = document.querySelector('#submit');
    const refreshInputEl = document.querySelector('#refresh');
function attachEvents() {
   submitInputEl.addEventListener('click', handleSubmitMessage);

   refreshInputEl.addEventListener('click', handleRefreshMessages);


}

attachEvents();

async function handleSubmitMessage(){
    const author = authorInputEl.value.trim();
    const content = contentInputEl.value.trim();

    const messageObj = {author,content};
    const createtRes = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(messageObj)
    });

    const createData = await createtRes.json();
    
    



}
async function handleRefreshMessages(){
    const messagedRes = await fetch('http://localhost:3030/jsonstore/messenger');
    const messagesData = await messagedRes.json();
    const messagesArra = Object.values(messagesData);

    let messages = [];

    messagesArra.forEach(messageobj => {
        messages.push(`${messageobj.author}: ${messageobj.content}`);
    })

    messagestextAreaEl.textContent = messages.join('\n');

}