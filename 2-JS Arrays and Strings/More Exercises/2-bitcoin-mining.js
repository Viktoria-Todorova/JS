function bitcoinMining(arr){
    //gold->lev->bitcoin
    let bitcoins = 0;
    let firstBitconiDay = 0;
    let money = 0;
    let day=1;

    for (let gold of arr) {
        if (day % 3 == 0) {
            gold *= 0.7; //every third day the gold is 30% less
        }

        money += gold * 67.51; //1g gold = 67.51 lev

        while (money >= 11949.16) { //1 bitcoin = 11949.16 lev
            if (bitcoins === 0){
                firstBitconiDay = day; //save the first day when bitcoin is bought
            }

            bitcoins ++;
            money -= 11949.16; //remove the money for the bitcoin
            
        }

        day++;}

    console.log( `Bought bitcoins: ${bitcoins}`);

    if (bitcoins >0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitconiDay}`);
        
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}


bitcoinMining([100, 200, 300])