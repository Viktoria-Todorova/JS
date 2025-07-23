document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputValidator = document.getElementById('email');
    
    let pattern = /[a-z]+@[a-z]+\./g;
    
    inputValidator.addEventListener('change', handleInputChange);

    function handleInputChange(){
        const emailToCheck = inputValidator.value.trim();

        if (!pattern.test(emailToCheck)){
            inputValidator.classList.add('error'); //add class error to the field

        }else{
            inputValidator.classList.remove('error');
        }
    }


}
