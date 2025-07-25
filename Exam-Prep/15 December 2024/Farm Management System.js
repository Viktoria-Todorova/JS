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

            if ( farmerArea[name] != area){
                console.log();
                
                break;
            }
        }else if(command === 'Change Area'){

        }else if (command === 'Learn Task'){

        }
    }
}

solve([
  "2",
  "Alice command_module piloting,communications",
  "Bob engineering_bay repair,maintenance",
  "Perform / Alice / command_module / piloting",
  "Perform / Bob / command_module / repair",
  "Learn Skill / Alice / navigation",
  "Perform / Alice / command_module / navigation",
  "Transfer / Bob / command_module",
  "Perform / Bob / command_module / maintenance",
  "End"
]
)

solve(
    [
  "3",
  "Tom engineering_bay construction,maintenance",
  "Sara research_lab analysis,sampling",
  "Chris command_module piloting,communications",
  "Perform / Tom / engineering_bay / construction",
  "Learn Skill / Sara / robotics",
  "Perform / Sara / research_lab / robotics",
  "Transfer / Chris / research_lab",
  "Perform / Chris / research_lab / piloting",
  "Learn Skill / Tom / diagnostics",
  "Perform / Tom / engineering_bay / diagnostics",
  "End"
]
)