function sumTable() {
    let sumEl = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    let finalsum = sumEl.pop();
    let sum = 0;
    for (const el of sumEl){
        sum += Number(el.textContent);
    }

    finalsum.textContent =sum;
    
    
    
}