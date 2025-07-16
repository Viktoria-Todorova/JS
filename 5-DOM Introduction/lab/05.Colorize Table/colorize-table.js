function colorize() {
    let boxes = document.querySelectorAll('tbody tr');
    boxes.forEach((trEl,index) =>{
        if( index %2 !== 0){
            trEl.style.backgroundColor= 'Teal';
        }
    })
    
}