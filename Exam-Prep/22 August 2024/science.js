function solve(input){
    let n = Number(input.shift());
    let chemicalInfo = {};

    for (let i=0; i < n; i++){
        let chemicals = input.shift().split(' # ');
        let chemicalName = chemicals[0];
        let chemicalQuantity = chemicals[1];
        console.log(chemicalName);
        
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