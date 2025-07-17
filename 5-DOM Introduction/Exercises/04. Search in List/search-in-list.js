function solve() {
   const allLiEl = document.querySelectorAll('#towns li');
   const searshInputEl = document.getElementById('searchText');
   const resultDivEl =document.getElementById('result');

   const searsh = searshInputEl.value.trim();
   let matches = 0;

   allLiEl.forEach(liEl => {
      if(liEl.textContent.includes(searsh)){
         liEl.style.fontWeight='bold';
         liEl.style.textDecoration ='underline';
         matches++;
      }else{
         liEl.style.fontWeight='normal';
         liEl.style.textDecoration ='none';
      }
   })

   resultDivEl.textContent = `${matches} matches found`
}