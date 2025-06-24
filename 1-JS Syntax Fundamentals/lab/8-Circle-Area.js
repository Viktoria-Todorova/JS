function circeArea(val){
    if (typeof val === 'number'){
        let area = Math.PI * val * val;
        console.log(area.toFixed(2));
        
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof val}.`);
    }
}

circeArea(5);