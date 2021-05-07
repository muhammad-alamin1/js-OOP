class Hero {
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power
        }
        return 'I have no power'
    }
    goForGrocery(){
        if(this.power){
            console.log(this.power)
        }
    }
}

const catman = new Hero('catman', 'Kamchi' );
console.log(catman.goForGrocery());