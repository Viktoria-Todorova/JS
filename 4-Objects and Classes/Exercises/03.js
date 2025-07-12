function storeProvision(currentQuant,orderedQuant){
    let store = {};

    for (let i=0;i<currentQuant.length;i +=2){
        let product = currentQuant[i];
        let quantity = Number(currentQuant[i+1]);
        store[product]= quantity
    }

    for(let i=0;i<orderedQuant.length;i += 2){
        let orderedProduct = orderedQuant[i];
        let orderedQuantity = Number(orderedQuant[i+1]);

        if (store.hasOwnProperty(orderedProduct)){
            store[orderedProduct] += orderedQuantity;
        }else{
            store[orderedProduct] = orderedQuantity;
        }
    }
    
    
    let entries =Object.entries(store);
    for (const[product,qt] of entries){
        console.log(`${product} -> ${qt}`);
        
    }
    
    
    

}

storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
)