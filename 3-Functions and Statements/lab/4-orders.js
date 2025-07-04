function orders(prod,qty){
    let price =0;

    switch(prod){
        case 'coffee':
            price = qty * 1.5;
            break
        case 'water': 
            price =qty * 1;
            break

        case 'coke':
            price =qty *1.4;
            break
        case 'snacks':
            price = qty *2;
            break

    }

    console.log(price.toFixed(2));
    

}

orders("water", 5)