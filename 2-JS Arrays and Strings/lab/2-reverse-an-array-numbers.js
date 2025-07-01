function reverseAnArray(n,arr){
    let result = arr.slice(0,n).reverse().join(' ');
    console.log(result);
    

}

reverseAnArray(3, [10, 20, 30, 40, 50])