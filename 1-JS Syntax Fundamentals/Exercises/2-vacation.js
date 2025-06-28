function vacantion(groupOfPeople,typeOfGroup,dayOftheWeek){
    totalPrice = 0;
    if (typeOfGroup == 'Students'){
        if(dayOftheWeek == 'Friday'){
            totalPrice = 8.45 * groupOfPeople;
        }else if(dayOftheWeek == 'Saturday'){
            totalPrice = 9.80 * groupOfPeople;
        }else if(dayOftheWeek == 'Sunday') {
            totalPrice = 10.46 * groupOfPeople;
        }

    }else if(typeOfGroup == 'Business'){
        if (groupOfPeople >= 100){
            groupOfPeople = groupOfPeople - 10;
        }

        if(dayOftheWeek == 'Friday'){
            totalPrice = 10.90 * groupOfPeople;
        }else if(dayOftheWeek == 'Saturday'){
            totalPrice = 15.60 * groupOfPeople;
        }else if(dayOftheWeek == 'Sunday') {
            totalPrice = 16 * groupOfPeople;
        }
    }else if(typeOfGroup == 'Regular'){
        if(dayOftheWeek == 'Friday'){
            totalPrice = 15 * groupOfPeople;
        }else if(dayOftheWeek == 'Saturday'){
            totalPrice = 20 * groupOfPeople;
        }else if(dayOftheWeek == 'Sunday') {
            totalPrice = 22.50 * groupOfPeople;
        }
    }
    if (groupOfPeople >= 30 && typeOfGroup == 'Students'){
        totalPrice -= totalPrice * 0.15;
    }
    if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfGroup== 'Regular'){
        totalPrice -= totalPrice *0.05
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
vacantion(30,
"Students",
"Sunday"
)