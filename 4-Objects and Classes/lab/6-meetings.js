function scheduleMeetings(arr){
    let dayMeetings ={};

    for (const str of arr) {
        let[day,name]=str.split(' ');

        if (day in dayMeetings){
            console.log(`Conflict on ${day}!`);
            
        }else{
            dayMeetings[day] =name;
            console.log(`Scheduled for ${day}`);
            
        }
        
    }

    let entries = Object.entries(dayMeetings);

    for(let [day,name] of entries){
        console.log(`${day} -> ${name}`);
        
    }
}

scheduleMeetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
)