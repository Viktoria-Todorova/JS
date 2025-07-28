function solve(input){
    let n = Number(input.shift());
    let chemicalsInfo = {};
    let chemicalsFormulas = {};

    for (let i=0; i < n; i++){
        let chemicals = input.shift().split(' # ');
        let chemicalName = chemicals[0];
        let chemicalQuantity = chemicals[1];
        chemicalsInfo[chemicalName] = Number(chemicalQuantity);
        
    }

    
    
    while(input[0] != 'End'){
        let allInfo = input.shift().split(' # ');
        let command = allInfo[0];
        
        
        if (command === 'Mix'){
          let chemName1 = allInfo[1];
          let chemName2 = allInfo[2];
          let amount = Number(allInfo[3]);

          if(Number(chemicalsInfo[chemName1]) < amount || (Number(chemicalsInfo[chemName2])) < amount){
            console.log(`Insufficient quantity of ${chemName1}/${chemName2} to mix.`);
            continue;
          
          }else{
            chemicalsInfo[chemName1] -= amount;
            chemicalsInfo[chemName2] -=amount;
            console.log(`${chemName1} and ${chemName2} have been mixed. ${amount} units of each were used.`);
            
          }

        }else if(command === 'Replenish'){
          let chemName = allInfo[1];
          
          let amount = Number(allInfo[2]);

          if(!Object.keys(chemicalsInfo).includes(chemName)){ //todo
            console.log(`The Chemical ${chemName} is not available in the lab.`);
            
          }else{
              let finalAmount = chemicalsInfo[chemName] + amount;

              if( finalAmount > 500){
                  let addedAmount = 500 - chemicalsInfo[chemName];

                console.log(`${chemName} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
                chemicalsInfo[chemName] = 500;
              }else{
                console.log(`${chemName} quantity increased by ${amount} units!`);
                chemicalsInfo[chemName] += amount;
              }
  
          }

        }else if(command === 'Add Formula'){
            let chemName = allInfo[1];
            let formula = allInfo[2];
            if(!Object.keys(chemicalsInfo).includes(chemName)){ //todo
            console.log(`The Chemical ${chemName} is not available in the lab.`);
            
          }else{
            chemicalsFormulas[chemName] = formula;
            console.log(`${chemName} has been assigned the formula ${formula}.`);
            
          }

            
        }
        
    }

    for (let chem in chemicalsInfo){
        if(chemicalsFormulas[chem]){
          console.log(`Chemical: ${chem}, Quantity: ${chemicalsInfo[chem]}, Formula: ${chemicalsFormulas[chem]}`);
          
        }else{
           console.log(`Chemical: ${chem}, Quantity: ${chemicalsInfo[chem]}`);
        }
      
    }
    

}


solve([ '4',
  'Water # 200',
  'Salt # 100',
  'Acid # 50',
  'Base # 80',
  'Mix # Water # Salt # 50',
  'Replenish # Salt # 150',
  'Add Formula # Acid # H2SO4',
  'End']
)

console.log(`------`);


solve([ '3',
  'Sodium # 300',
  'Chlorine # 100',
  'Hydrogen # 200',
  'Mix # Sodium # Chlorine # 200',
  'Replenish # Sodium # 250',
  'Add Formula # Sulfuric Acid # H2SO4',
  'Add Formula # Sodium # Na',
  'Mix # Hydrogen # Chlorine # 50',
  'End']
)
