function solve() {
    const textArea =document.querySelector('textarea');
    const bestResataurantPEL =document.querySelector('#bestRestaurant p');
    const workersPEl= document.querySelector('#workers p');

    const restauranrtInfo = JSON.parse(textArea.value);

    let restaurantWorker ={};
    for (const restauranStr of restauranrtInfo){
        const[restaurantName,workersStr]= restauranStr.split(' - ');

        if(!(restaurantName in restaurantWorker)){
            restaurantWorker[restaurantName]=[];
        }

        const workerArr = workersStr.split(', ');

        for (const workerStr of workerArr){
            let [name,salary] =workerStr.split(' ');
            salary = Number(salary);

            restaurantWorker[restaurantName].push({
                name,salary
            })
        }
    }
    let bestRestaurant = '';
    let bestAvgSakary = 0;
    const entries = Object.entries(restaurantWorker);
    for (const [restName,workArr] of entries){
        const workeravSalary =workArr.map(worker => worker.salary);

        const avgSalary = workeravSalary.reduce((acc,val)=> acc+val)/ workeravSalary.length;

        if (avgSalary > bestAvgSakary){
            bestRestaurant = restName;
            bestAvgSakary=avgSalary;
        }
        
    }
    const bestWorkers = restaurantWorker[bestRestaurant].sort((a,b)=> b.salary-a.salary);//sort descending
    const bestSalary = bestWorkers[0].salary;

    bestResataurantPEL.textContent =`Name: ${bestRestaurant} Average Salary: ${bestAvgSakary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
    

    for(const {name,salary} of bestWorkers){
        workersPEl.textContent += `Name: ${name} With Salary: ${salary} `
    }
}