function solve(input){
    const n = Number(input.shift());
    
    let HeroLife = {};
    let HeroBullets = {};
    for (let i= 0; i< n; i++){
        const currentInput = input.shift().split(' ');
        const heroName = currentInput[0];
        const hp = Number(currentInput[1]); //max 100
        const bullets = Number(currentInput[2]);

        HeroLife[heroName] =hp;
        HeroBullets[heroName] = bullets;      
        
    }

    while( input[0] != 'Ride Off Into Sunset'){
        const allCommands = input.shift().split(' - ');
        const command = allCommands[0];
        const characterName = allCommands[1];
        
        // Skip if hero is already dead
        if (!HeroLife.hasOwnProperty(characterName)) continue;

        if (command === 'FireShot'){
            const target = allCommands[2];
            if (HeroBullets[characterName] > 0){
                HeroBullets[characterName] -= 1;
                console.log(`${characterName} has successfully hit ${target} and now has ${HeroBullets[characterName]} bullets!`);
                
            }else{
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
                
            }
        }else if(command === 'TakeHit'){
            const damage = Number(allCommands[2]);
            const attacker =allCommands[3];
            HeroLife[characterName] -= damage;

            if (HeroLife[characterName] >0){
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${HeroLife[characterName]} HP!`);
                
            }else{
               console.log(`${characterName} was gunned down by ${attacker}!`);
                
            }
        }else if(command === 'Reload'){

            if ( HeroBullets[characterName] < 6){
                let currentBullets =6 -  HeroBullets[characterName];
                HeroBullets[characterName] = 6;//

                console.log(`${characterName} reloaded ${currentBullets} bullets!`);
                
            }else{
                console.log(`${characterName}'s pistol is fully loaded!`);
                
            }
        }else if(command === 'PatchUp' ){
            const amout = Number(allCommands[2]);
            // const currentHP = HeroLife[characterName];
            // let totalHP = amout + HeroLife[characterName];

            if (HeroLife[characterName] === 100) {
                console.log(`${characterName} is in full health!`);
            } else {
                const recovered = Math.min(100 - HeroLife[characterName], amout);
                HeroLife[characterName] += recovered;
                console.log(`${characterName} patched up and recovered ${recovered} HP!`);
            }

          
        }
        
    }
    //TODO if hero alive
    
    for (let name in HeroLife){
        if (HeroLife[name] > 0){
           console.log(`${name}\n HP: ${HeroLife[name]}\n Bullets: ${HeroBullets[name]}`);

        }
        
        
    }
}


solve((["2",
   "Gus 100 4",
   "Walt 100 5",
   "FireShot - Gus - Bandit",
   "TakeHit - Walt - 100 - Bandit",
   "Reload - Gus",
   "Ride Off Into Sunset"])
)


