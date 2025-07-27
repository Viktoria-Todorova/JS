function solve(input){
    let crewSection = {};
    let crewSkills = {};
    let n = Number(input.shift()); //number austronauts
    
    for (let i=0; i<n;i++){
        let curentLine = input.shift();
        let [name,section,skills] = curentLine.split(' ');
        let arSkills = skills.split(',');   
        
        
        crewSection[name] =section;
        crewSkills[name] =new Set(arSkills); //TODO
    }

    while(input[0] != 'End'){
        let currentLine = input.shift();
        let tasks = currentLine.split(' / ');
        let command = tasks[0];
        let austronautName = tasks[1];
        
        if (command === 'Perform'){
            let spaceSection = tasks[2];
            let skill =tasks[3];

            if(crewSection[austronautName] != spaceSection || !crewSkills[austronautName].has(skill)){
                console.log(`${austronautName} cannot perform the skill: ${skill}.`);
                continue;
            }else{
                console.log(`${austronautName} has successfully performed the skill: ${skill}!`);
                
            }

        } else if(command === 'Transfer'){
            let newSection = tasks[2];
            crewSection[austronautName]=newSection;

            console.log(`${austronautName} has been transferred to: ${newSection}`);
            
        } else if(command === 'Learn Skill'){
            let newSkill = tasks[2];
            if (crewSkills[austronautName].has(newSkill)){
                console.log(`${austronautName} already knows the skill: ${newSkill}.`);
                continue;
                
            }else{
                crewSkills[austronautName].add(newSkill);
                console.log(`${austronautName} has learned a new skill: ${newSkill}.`);
                
            }
        }
             
    }

    for( let name in crewSection){
        let sortedSkills = [...crewSkills[name].values()].sort((a,b) => a.localeCompare(b));
        console.log(`Astronaut: ${name}, Section: ${crewSection[name]}, Skills: ${sortedSkills.join(', ')}`);
        
        
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

console.log(`-----`);


solve([
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




