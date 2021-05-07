class Animal{
    static category = `Dog`;
    location = 'Bandorbon'
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1, animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.name} is faster`;
        }
        return `${animal2.name} is faster`;
    }
}

const myRat = new Animal('rat', '13mph');
console.log(myRat);
console.log(Animal.category);
console.log(Animal.location);