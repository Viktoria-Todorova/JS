function phonebook(arr){
    let peopleNumbers = {};

    for (let str of arr){
        let[name,phone] = str.split(' ');
        peopleNumbers[name] =phone;
    }

    let entries = Object.entries(peopleNumbers);

    for (let[name,phone] of entries){
        console.log(`${name} -> ${phone}`);
        
    }
}

phonebook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)