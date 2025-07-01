function sumFirstLasElements(arr){

    let firstEl=arr.shift();
    let lastEl =arr.pop();
    console.log(firstEl + lastEl);
    
}

sumFirstLasElements([20, 30, 40])