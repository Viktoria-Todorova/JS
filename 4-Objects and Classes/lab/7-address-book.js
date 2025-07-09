function adressBook(arr){
    let peopleAddreses = {};

    for (const str of arr) {
        let[name,address] = str.split(':');
        peopleAddreses[name] =address; 
    }

    let entries = Object.entries(peopleAddreses).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name,address] of entries){
        console.log(`${name} -> ${address}`);
        
    }
    
    
}

adressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']
)