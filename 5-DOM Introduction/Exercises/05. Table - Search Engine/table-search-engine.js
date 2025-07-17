function solve() {
   const allTdEl = document.querySelectorAll('tbody td');
   const allTrEl = document.querySelectorAll('tbody tr');

   const searshInputEl = document.getElementById('searchField');

   allTrEl.forEach(trEl => {
      trEl.classList.remove('select')
   })
   

   const search = searshInputEl.value.trim().toLowerCase();

   if(!search){
      return;
   }


   allTdEl.forEach(tdEl =>{
      if (tdEl.textContent.toLowerCase().includes(search)){
         const trEl =tdEl.parentElement;
         trEl.classList.add('select');
      }
   }
   )
}