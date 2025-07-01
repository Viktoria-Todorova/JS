function printEberyNth(arr,n){
    let filteredArr = [];

    for (let i= 0; i < arr.length;i += n){
        let currentEl =arr[i];
        filteredArr.push(currentEl);
    }

    return filteredArr;
}

console.log(printEberyNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))

