
function setupCats(arr){
    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }


    }

    for (const str of arr){
        let[name,age] =str.split(' ');
        let currentCat = new Cat(name,age);
        currentCat.meow();
    }
}