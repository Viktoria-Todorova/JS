function circeArea(val){
    if (typeof val === 'number'){
        console.log(Math.PI * val * val);
        
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof val}.`);
    }
}

circeArea(5);