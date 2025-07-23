document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.getElementById('task-input');
   //default action it for the page to refresh
   const textInputEl = document.querySelector('#task-input input[type="text"]');
   const contentDivEl = document.getElementById('content');
   

   //form- sumbit -> click and enter
   formEl.addEventListener('submit', handleDFormSubmit);

   function handleDFormSubmit(e){
      e.preventDefault(); // prevent that first default so it dosnst refresh
      const sectionStr = textInputEl.value.trim();
      const sectionNames = sectionStr.split(', ');
      sectionNames.forEach(sectionName => {
         const divEl = document.createElement('div');
         const pEl = document.createElement('p'); // we create a paragrapsh
         pEl.textContent=sectionName;

         pEl.style.display = 'none';
         divEl.appendChild(pEl); // push it to the small div in the section

         divEl.addEventListener('click', () => {
            pEl.style.display = 'block';
         });
         contentDivEl.appendChild(divEl); //adds it to the outter div
      });

   }
   
}