function deleteByEmail() {
    const inputEmailEl = document.querySelector('input');
    const getAllEmails = document.querySelectorAll('tbody tr td:nth-child(2)');
    const resultDivEl = document.getElementById('result');

    const searshedEmail = inputEmailEl.value.trim();
    let eleementFound = false;

    getAllEmails.forEach(tdEl => {
        if(tdEl.textContent === searshedEmail){
            const trEl = tdEl.parentElement;
            trEl.remove();
            resultDivEl.textContent = 'Deleted.';
            eleementFound = true;
        }
    })
    
    if (!eleementFound){
        resultDivEl.textContent = 'Not found.';
    }
}