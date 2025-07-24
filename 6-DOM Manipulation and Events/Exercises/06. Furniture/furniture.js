document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl = document.querySelector('#input');
  const inputTeXTaREA = document.querySelector('#input textarea');
  const tbodyAEl=document.querySelector('tbody');

  const shopFormEl =document.querySelector('#shop');
  const resutTextArea = document.querySelector('#shop textarea');
  inputFormEl.addEventListener('submit',handleGenerateProdcuct);
  shopFormEl.addEventListener('submit',handleBuyProducts);

  function handleGenerateProdcuct(e){
    e.preventDefault();
    const json =inputTeXTaREA.value.trim();
    const functionArr =JSON.parse(json);
    functionArr.forEach(funritureObj => {
      const trEl =document.createElement('tr');
      const imgTdEl = document.createElement('td');
      const imgEl = document.createElement('img');
      imgEl.src= funritureObj.img;
      imgTdEl.appendChild(imgEl);

      const nameTdEl =document.createElement('td');
      const namePEl= document.createElement('p');
      namePEl.textContent= funritureObj.name;
      nameTdEl.appendChild(namePEl);

      const priceTdEl =document.createElement('td');
      const pricePEl= document.createElement('p');
      pricePEl.textContent= funritureObj.price;
      priceTdEl.appendChild(pricePEl);

      const decFactTdEl =document.createElement('td');
      const decFactorPEl= document.createElement('p');
      decFactorPEl.textContent= funritureObj.decFactor;
      decFactTdEl.appendChild(decFactorPEl);


      const checboxTdEl = document.createElement('td');
      const chechinputEl = document.createElement('input');
      chechinputEl.type='checkbox';
      checboxTdEl.appendChild(chechinputEl);

      trEl.appendChild(imgTdEl);
      trEl.appendChild(nameTdEl);
      trEl.appendChild(priceTdEl);
      trEl.appendChild(decFactTdEl);
      trEl.appendChild(checboxTdEl);

      tbodyAEl.appendChild(trEl);
        })
  }

  function handleBuyProducts(e){
    e.preventDefault();
    const formEl = e.target;
    const allSelectedCheckBoxes = Array.from(formEl.querySelectorAll('input:checked'));
    const allSelecrtedTrEl = allSelectedCheckBoxes.map(checboxTdEl => checboxTdEl.closest('tr'));
    const allFurnitureNames = allSelecrtedTrEl.map(trEl => trEl.querySelector('td:nth-child(2) p').textContent);
    const allFurnitureprices = allSelecrtedTrEl.map(trEl => Number(trEl.querySelector('td:nth-child(3) p').textContent));

    const allFurnitureFactor = allSelecrtedTrEl.map(trEl => Number(trEl.querySelector('td:nth-child(4) p').textContent));

    
    const totalFurniturePrice = allFurnitureprices.reduce((acc,val) => acc+val,0);
    const avgFurnitureFactor = allFurnitureFactor.reduce((acc,val)=> acc+val,0)/allFurnitureFactor.length;

    resutTextArea.value = `Bought furniture: ${allFurnitureNames.join(', ')}\nTotal price: ${totalFurniturePrice}\nAverage decoration factor: ${avgFurnitureFactor}`
  }

}