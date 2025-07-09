function sity(arr){
    let entries = Object.entries(arr);
    
    for(const entry of entries){

        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    
    
}

sity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)