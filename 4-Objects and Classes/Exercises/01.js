function employees(names){

    let employeesNames = {};
    for(const curName of names){
        employeesNames[curName] = curName.length;
    }
    let entries = Object.entries(employeesNames);
    for (const [employeeName,personalNum] of entries){
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
        
    }
    
    
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)