// Today is Pen4o’s 18th birthday. As his friends, we’ll organize a surprise party. Let’s work on the guest list.

// 1. He wants to keep it simple and only invite his close friends - the base list includes Pen4o, Min4o, Penka, and Donka

let guests = ['Pen4o', 'Min4o', 'Penka', 'Donka']
console.log(guests);
// 2. Oh, no! Penka wants to bring her cousin Mara Podrobnata uninvited… Add her to the end of the list

guests.push('Mara Podrobnata')
console.log(guests);

// 3. Everyone agreed that Mara is… just too intense. Let’s kindly escort her.

guests.pop();
console.log(guests);

// 4. The doorbell rings - it’s grandma! Family is always a priority. Add her as the first name in the list.

guests.unshift('Grandma')
console.log(guests);
// 5. Ugh. Grandma realized this will be a modern party with chalga music and kiucheci, so, disappointed, she left early. Remove her from the list.
guests.shift();
console.log(guests);

// 6. Min4o wants to invite his magician friend, Max.  He needs to sit in the middle in order to demonstrate his tricks, so insert him after Min4o.
guests.splice(2,0,'Max')
console.log(guests);

// 7. The DJ, Min4o, spilled soda all over his shirt. He had no choice but to go home. Remove him from the list

guests.splice(1,1)
console.log(guests);

// 8. To keep the energy up, we invite a new DJ - DJ Mirko! Add him at Min4o’s old spot
guests.splice(1,0,'DJ Mirko')
console.log(guests);

// 9. Min4o starts playing music. They hear “*Sometimes I wish that I could freeze the picture…”* 
// Wait, the song’s right! **Let’s take a snapshot (copy) of the current guest list and print it

let copy = guests.slice()
console.log(copy);
// 10. Time to announce the final list. Print all names connected with a comma + space

console.log(guests.join(', '));

// 11. Is Max still here? Let’s check

console.log(guests.includes('Max'));

// 12. Min4o is looking for his crush - Donka. Check where she is.
console.log(guests.indexOf('Donka'));

// 13. We’re about to play a game. In order to do so, we want to create name tags in all lowercase. Print the tags.
guests.forEach(n => console.log(n.toLocaleLowerCase()));

// 14. There’s very little space on the labels, so names longer than 3 characters must be wrapped. Find these names and print them.

let longNames=guests.filter(n => n.length > 3);
console.log(longNames);

// 15. Pen4o feels like someone’s shouting his name from the other room. But it’s so noisy that it’s hard to distinguish Pen4o from Penka. To learn which name is being called, find the first name in the array that starts with the letter “P”. Print the right name.

let firstFoundName = guests.find(n =>n[0] == 'P')
console.log(firstFoundName);
