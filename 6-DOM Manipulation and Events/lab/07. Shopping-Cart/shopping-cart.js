document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const allAddProductButton = document.querySelectorAll('.add-product');
   const textAreeL = document.querySelector('textarea');
   const checkoutBtn = document.querySelector('.checkout'); //. is for claass

   allAddProductButton.forEach(btnEl => {
      btnEl.addEventListener('click', handleProductAdd);
   })

   checkoutBtn.addEventListener('click', handleCheckOut);
   
   let products = new Set();
   let totalPrice = 0;

   function handleProductAdd(e){
      const fullProductDivEl = e.target.closest('.product');// find the clossest class with product
      const productTitleDivEl = fullProductDivEl.querySelector('.product-title');
      const product = productTitleDivEl.textContent;

      const priceDivEl = fullProductDivEl.querySelector('.product-line-price');

      const price = Number(priceDivEl.textContent);

      textAreeL.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`

      products.add(product);
      totalPrice += price;
   }

   function handleCheckOut(){
      const productsString = Array.from(products).join(', ');
      textAreeL.value += `You bought ${productsString} for ${totalPrice.toFixed(2)}.`
      checkoutBtn.disabled = true;

      allAddProductButton.forEach( btnEl => btnEl.disabled = true);
   }
}
