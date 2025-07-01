function sortinNumbers(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    let result = [];
    while (sortedArr.length > 0){
        let firstEl = sortedArr.shift();
        result.push(firstEl);

        let lastEl = sortedArr.pop();
        result.push(lastEl);

        
    }
    return result;
}

console.log(sortinNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))