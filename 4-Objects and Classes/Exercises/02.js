function Towns(townInfo){
    
    let towns = [];

    for(const current of townInfo){
        let[town,latitude,longitude]=current.split(" | ");
        latitude = Number(latitude);
        longitude =Number(longitude);

        let townObj = {
        town,
        latitude: latitude.toFixed(2),
        longitude: longitude.toFixed(2)};
        
        
        towns.push(townObj);
        
    }

    towns.forEach(town => console.log(town));  
    
}   

Towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)