function printAnsSum(start,end){
    numbs = [];
    summedNum=0;
    for(let i = start; i <=end; i++){
        numbs.push(i);
        summedNum +=i;
    }
    
    console.log(numbs.join(' '));
    console.log(`Sum: ${summedNum}`);
    
}

printAnsSum(50, 60)