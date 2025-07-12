function invenory(arr){
    let heroInfo = [];

    for (const currentHero of arr){
    let [heroName, heroLevel,items]= currentHero.split(' / ');
        heroLevel = Number(heroLevel);
        let heroDetails = {
            heroName,
            heroLevel,
            items
        }

        heroInfo.push(heroDetails);
        
    }

    heroInfo.sort((a,b) => a.heroLevel - b.heroLevel);

    for (const hero of heroInfo){
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items}`);
         
    }

}

invenory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
)