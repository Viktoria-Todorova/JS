function solve(input){
    //split line into name,area and task type
    //split task types

    //process comands
    //#excecute
    //verify work area
    //verify task
    //print success

    //#change area
    //modify farmer recors and set new area
    //#learn
    //verify farmer
    //add task to farmer list print success message

    //output:
    //print each farmer and their area
    //sort task by nme

    //string assoc array
    let farmerArea = {};

    //set assoc array
    let farmerTask ={};
    let n = Number(input.shift()); //deletes first element

    for (let i=0;i <n; i++){
        let line = input.shift();

        let [name,area,taskAsStieng] = line.split(' ');
        let task = taskAsStieng.split(',');
        farmerArea[name] = area;
        farmerTask[name]=new Set(task);
        
    }

    while( input[0] != 'End'){
        let line = input.shift();
        let tokens = line.split(' / ');
        let command = tokens[0];

        if (command === 'Execute'){
            let name = tokens[1];
            let area = tokens[2];
            let task = tokens[3];

            if ( farmerArea[name] != area || !farmerTask[name].has(task)){
                console.log(`${name} cannot execute the task: ${task}.`);           
                continue;
            }
            console.log(`${name} has executed the task: ${task}!`);
            
        }else if(command === 'Change Area'){
            let name = tokens[1];
            let area = tokens[2];
            farmerArea[name] = area;
            console.log(`${name} has changed their work area to: ${area}`);
            

        }else if (command === 'Learn Task'){
            let name = tokens[1];
            let task = tokens[2];

            if(farmerTask[name].has(task)){ //because is set
                console.log(`${name} already knows how to perform ${task}.`);
                
                continue;
            }
            farmerTask[name].add(task);
            console.log(`${name} has learned a new task: ${task}.`);
            
        }
    }

    for(let name in farmerArea){
        let sortedTsrks = [...farmerTask[name].values()].sort((a,b) => a.localeCompare(b));
        console.log(`Farmer: ${name}, Area: ${farmerArea[name]}, Tasks: ${sortedTsrks.join(', ')}`);
        

    }
}

solve([
  "2",
  "John garden watering,weeding",
  "Mary barn feeding,cleaning",
  "Execute / John / garden / watering",
  "Execute / Mary / garden / feeding",
  "Learn Task / John / planting",
  "Execute / John / garden / planting",
  "Change Area / Mary / garden",
  "Execute / Mary / garden / cleaning",
  "End"
]

)
console.log(`-----------`);

// solve(
//     [
//   "3",
//   "Alex apiary harvesting,honeycomb",
//   "Emma barn milking,cleaning",
//   "Chris garden planting,weeding",
//   "Execute / Alex / apiary / harvesting",
//   "Learn Task / Alex / beeswax",
//   "Execute / Alex / apiary / beeswax",
//   "Change Area / Emma / apiary",
//   "Execute / Emma / apiary / milking",
//   "Execute / Chris / garden / watering",
//   "Learn Task / Chris / pruning",
//   "Execute / Chris / garden / pruning",
//   "End"
// ]

// )