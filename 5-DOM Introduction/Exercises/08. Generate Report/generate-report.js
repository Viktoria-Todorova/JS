function solve() {
    const allaCheckedeL = document.querySelectorAll('input[type="checkbox"]');
    const allTrEL =document.querySelectorAll('tbody tr');

    const outputTextArea = document.getElementById('output');

    const checkCols =[];
    allaCheckedeL.forEach((checkboxEl,idx) =>{
        if (checkboxEl.checked){
            checkCols.push({
                index:idx,
                name:checkboxEl.name
            });
        }
    });
    
    let report =[];

    allTrEL.forEach(trEl =>{
        const tdEls =trEl.children;
        let rowData = {};
        checkCols.forEach(col => {
            const propName = col.name;
            const propValueIndex =col.index;
            const propValue =tdEls[propValueIndex].textContent;
            rowData[propName] = propValue;
        })
        report.push(rowData);
    }

    )

    outputTextArea.value = JSON.stringify(report);
    
     
}