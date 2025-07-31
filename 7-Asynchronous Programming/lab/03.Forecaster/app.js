const locationInputEl = document.querySelector('#location');
const submitInputEl = document.querySelector('#submit');
const forecastDivEl = document.querySelector('#forecast');
const currentDivE = document.querySelector('#current');
const uncomingDivEl =document.querySelector('#upcoming')



function attachEvents() {
    submitInputEl.addEventListener('click', handleWeatherReport);


}
const symbolMap = {
    'Sunny' : '&#x2600;',
   'Partly sunny': '&#x26C5;', // ⛅
    'Overcast':	'&#x2601;', // ☁
    'Rain':	'&#x2614;', // ☂
    'Degrees':'&#176;'   // 

}


async function handleWeatherReport() {
    forecastDivEl.style.display= 'block';
    try{
        const alllocationResult = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const allLocationData = await alllocationResult.json();
        const search =locationInputEl.value.trim();
        const locationObj = allLocationData.find(loc => loc.name === search);
        

        const currentConditionRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationObj.code}`);
        const currentConditionData =await currentConditionRes.json();
        
        
        const threeDayForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationObj.code}`);
        const threeDayForData= await threeDayForecast.json();

        loadCurrentForecast()
        loadThreeDayForecast()

        function loadCurrentForecast(){
            const forecastsDivEl = document.createElement('div');
            forecastsDivEl.classList.add('forecasts');

            const symborSpanEl = document.createElement('span');
            symborSpanEl.classList.add('condition', 'symbol');
            symborSpanEl.innerHTML = symbolMap[currentConditionData.forecast.condition];

            const conditionSpanEl =document.createElement('span');
            conditionSpanEl.classList.add('condition');

            const fulllocationSpanEl = document.createElement('span');
            fulllocationSpanEl.classList.add('forecast-data');
            fulllocationSpanEl.textContent =currentConditionData.name;

            const degreeseSpanEl = document.createElement('span');
            degreeseSpanEl.classList.add('forecast-data');
            degreeseSpanEl.innerHTML=`${currentConditionData.forecast.low}${symbolMap.Degrees}/${currentConditionData.forecast.high}${symbolMap.Degrees}`


            const descreptionSpnEl =document.createElement('span');
            descreptionSpnEl.classList.add('forecast-data');
            descreptionSpnEl.textContent = currentConditionData.forecast.condition;

            conditionSpanEl.appendChild(fulllocationSpanEl);
            conditionSpanEl.appendChild(degreeseSpanEl);
            conditionSpanEl.appendChild(descreptionSpnEl);

            forecastsDivEl.appendChild(symborSpanEl);
            forecastsDivEl.appendChild(conditionSpanEl);

            currentDivE.appendChild(forecastsDivEl)
        }
        
        function loadThreeDayForecast(){
            const forecastinfEl =document.createElement('div');
            forecastinfEl.classList.add('forecast-info');

            for (const {condition,high,low} of threeDayForData.forecast){
                const uncomingSpanElem = document.createElement('span');
                uncomingSpanElem.classList.add('upcoming');

                const symbolSpnEl = document.createElement('span');
                symbolSpnEl.classList.add('symbol');
                symbolSpnEl.innerHTML=symbolMap[condition];

                const degreaseSpanEl = document.createElement('span');
                degreaseSpanEl.classList.add('forecast-data');
                degreaseSpanEl.innerHTML = `${low}${symbolMap.Degrees}/${high}${symbolMap.Degrees}`

                const conditionSpanEl = document.createElement('span');
                conditionSpanEl.classList.add('forecast-data');
                conditionSpanEl.textContent=condition;

                uncomingSpanElem.appendChild(symbolSpnEl);
                uncomingSpanElem.appendChild(degreaseSpanEl);
                uncomingSpanElem.appendChild(conditionSpanEl);

                forecastinfEl.appendChild(uncomingSpanElem);

                uncomingDivEl.appendChild(forecastinfEl);

            }
        }
    } catch{

        forecastDivEl.textContent = 'Error';
    }
    
    


    
    
}

attachEvents();