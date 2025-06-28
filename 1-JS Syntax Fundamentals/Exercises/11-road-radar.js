function roadRadar(speed, area){
    let overTheLimit = false;
    let status = '';
    let speedDifference = 0;
    let currentSpeedLimit = 0;
    if (area == 'motorway'){
        currentSpeedLimit =130;
        if (speed >130){
            overTheLimit = true;
            speedDifference = speed -130
            if (speedDifference <= 20){
                status = 'speeding';
            }else if(speedDifference > 20 && speedDifference <= 40){
                status= 'excessive speeding';
            }else{
                status = 'reckless driving'
            }

        }
    } else if (area == 'interstate'){
        currentSpeedLimit =90;
        if (speed >90){
            overTheLimit = true;
            speedDifference = speed -90;
            if (speedDifference <= 20){
                status = 'speeding';
            }else if(speedDifference > 20 && speedDifference <= 40){
                status= 'excessive speeding';
            }else{
                status = 'reckless driving.'
            }

        }
    }else if (area == 'city'){
        currentSpeedLimit =50;
        if (speed >50){
            overTheLimit = true;
            speedDifference = speed -50;
            if (speedDifference <= 20){
                status = 'speeding';
            }else if(speedDifference > 20 && speedDifference <= 40){
                status= 'excessive speeding';
            }else{
                status = 'reckless driving'
            }

        }
    }else if (area == 'residential'){
        currentSpeedLimit =20;
        if (speed >20){
            overTheLimit = true;
            speedDifference = speed -20;
            if (speedDifference <= 20){
                status = 'speeding';
            }else if(speedDifference > 20 && speedDifference <= 40){
                status= 'excessive speeding';
            }else{
                status = 'reckless driving'
            }

        }
    }

   if (overTheLimit == true){
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${currentSpeedLimit} - ${status}`);
        
   }
   else{
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`);
    
   }
    
    
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')