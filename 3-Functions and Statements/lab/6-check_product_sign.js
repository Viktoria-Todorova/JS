function checkProductSign(num1,num2,num3){
    let numArr = [num1,num2,num3]
    let negativeNumsArr= numArr.filter(num =>  num <0);

    if (negativeNumsArr.length%2 !== 0) {
        console.log('Negative');
        
    }else{
        console.log('Positive');
        
    }
}

checkProductSign( 5,
 12,
-15
)