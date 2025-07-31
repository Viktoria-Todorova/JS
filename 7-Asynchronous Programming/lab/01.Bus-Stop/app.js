function getInfo() {
    const stopIdInputEl = document.querySelector('#stopId');
    const stopNameDiel= document.querySelector('#stopName');
    const busesEl= document.querySelector('#buses');
    busesEl.innerHTML = '';

    const stopId= stopIdInputEl.value.trim();

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(res =>res.json())
        .then(stopObj =>{
            stopNameDiel.textContent=stopObj.name;
            const busEntries = Object.entries(stopObj.buses);

            for (const [busNumber,time] of busEntries){
                const lieL = document.createElement('li');
                lieL.textContent = `Bus ${busNumber} arrives in ${time} minutes`;
                busesEl.appendChild(lieL);
            }
        })
        .catch(err => stopNameDiel.textContent = 'Error');

        

}