window.addEventListener("load", solve);

function solve(){
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');
    const addButton = document.getElementById('add-btn');
    const deleteBtn = document.querySelector('.btn.delete');
    const form = document.querySelector('.form-container'); // !

    addButton.addEventListener('click', handleOnAdd);

    function handleOnAdd(e){
        e.preventDefault();
        //1

        const expenseType = document.getElementById('expense').value.trim();
        const amount =document.getElementById('amount').value.trim();
        const date = document.getElementById('date').value.trim();
        //2

        if(!expenseType || !amount || !date){
            return;
        }
        
        //3
        const expensesLiElement = document.createElement('li');
        expensesLiElement.classList.add('expense-item');
        
       //4 
        const article = create('article', [
            create('p', [`Type: ${expenseType}`]),
            create('p', [`Amount: ${amount}$`]),
            create('p', [`Date: ${date}`])
        ]);

        //5

        const divEl = document.createElement('div');
        divEl.classList.add('buttons');

         // Create Edit button
        const editBtn = create('button', ['Edit'], { class: 'btn edit' });
        editBtn.addEventListener('click',handleEditBtn);

        // Create ok button
        const okBtn = create('button', ['Ok'], { class: 'btn ok' });
        okBtn.addEventListener('click',handleOnOkBtn);

        //6
        divEl.appendChild(editBtn);
        divEl.appendChild(okBtn);

        //7
        expensesLiElement.appendChild(article);
        expensesLiElement.appendChild(divEl);

        //8
        previewList.appendChild(expensesLiElement);
        //9  the input fields should be cleared.
        document.getElementById('expense').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').value = '';
        //10 ",[Add] button must be disabled
        addButton.disabled = true;

        //11
        function handleEditBtn(){
            document.getElementById('expense').value = expenseType; 
            document.getElementById('amount').value=amount;
            document.getElementById('date').value= date;

            addButton.disabled = false;

            previewList.replaceChildren();
        }

        //12
        function handleOnOkBtn(){
            divEl.remove();
            expensesList.appendChild(expensesLiElement);
            addButton.disabled = false;
            
        }

       
        
        form.reset();
        

    }
    //13
     deleteBtn.addEventListener('click', handleDeleteBtn);

    function handleDeleteBtn(){
        //expensesList.replaceChildren();
        location.reload();
    }
        

    // :) 
    function create(tag, content = [], attributes = {}) {
        const el = document.createElement(tag);

        // Apply any attributes (like class)
        for (const attr in attributes) {
            el.setAttribute(attr, attributes[attr]);
        }

        // Add text or child elements
        (Array.isArray(content) ? content : [content]).forEach(child => {
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child));
            } else {
                el.appendChild(child);
            }
        });

        return el;
    }
}