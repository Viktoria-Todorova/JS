function fruitFunc(fruit, grams,price){
    gramsToKg = grams / 1000;
    priceKg = gramsToKg * price
    console.log(`I need $${(priceKg.toFixed(2))} to buy ${gramsToKg.toFixed(2)} kilograms ${fruit}.`);
    
}

fruitFunc('orange', 2500, 1.80)
fruitFunc('apple', 1563, 2.35)