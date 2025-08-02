const inputName = document.querySelector('input[name="firstName"]');
const inputlastName = document.querySelector('input[name="lastName"]');
const inputfacultyNumber = document.querySelector('input[name="facultyNumber"]');
const inputgrade = document.querySelector('input[name="grade"]');

const submitBtn = document.querySelector('#submit');


const tbodyEl = document.querySelector('tbody');
const formEl = document.querySelector('#form');

formEl.addEventListener('submit', handleCreateStudent);

async function handleCreateStudent(e){
    e.preventDefault(); // when we have submit form the defaut is to refresh
    const firstName = inputName.value.trim();
    const lastName = inputlastName.value.trim();
    const facultyNumber = inputfacultyNumber.value.trim();
    const grade = Number(inputgrade.value.trim());

    const createRes = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
           { firstName,
            lastName,
            facultyNumber,
            grade}
        )
    });

    const createData = await createRes.json();
    
    handleLoadStudents();

}

async function handleLoadStudents(){
    const studetnRes = await fetch('http://localhost:3030/jsonstore/collections/students');
    const studentData = await studetnRes.json();
    const studArr = Object.values(studentData);
    
    tbodyEl.innerHTML = '';
    studArr.forEach( stuObj => {
        const trEl = document.createElement('tr');
        const firNametdEl = document.createElement('td');
        firNametdEl.textContent = stuObj.firstName;


        const lastNameEL = document.createElement('td');
        lastNameEL.textContent = stuObj.lastName;

        const facNumEl =document.createElement('td');
        facNumEl.textContent= stuObj.facultyNumber;

        const gradeEl = document.createElement('td');
        gradeEl.textContent = stuObj.grade;

        trEl.appendChild(firNametdEl);
        trEl.appendChild(lastNameEL);
        trEl.appendChild(facNumEl);
        trEl.appendChild(gradeEl);

        tbodyEl.appendChild(trEl);
    });
    
    
}

handleLoadStudents();
