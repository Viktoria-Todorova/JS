window.addEventListener("load", solve);

function solve(){
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');
    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', handleOnAdd);

    function handleOnAdd(e){
        e.preventDefault();

        const expenseType = document.getElementById('expense').value.trim();
        const amount =document.getElementById('amount').value.trim();
        const date = document.getElementById('date').value.trim();

        if(!expenseType || !amount || !date){
            return;
        }

        
        

    }
}