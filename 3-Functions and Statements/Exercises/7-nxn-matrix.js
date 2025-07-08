function nxnMatrix(num){
    for (let row=1; row <= num; row ++){
        printRow()
    }
    function printRow(){
        console.log(`${num} `.repeat(num));
        
    }
}

nxnMatrix(3)