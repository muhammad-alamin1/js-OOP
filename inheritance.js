class SmartDevice{
    constructor(name, price,){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am eating electrons... they yumy')
    }
}


class Phone extends SmartDevice{
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    sendSMS(){
        console.log('I am sending text to my gf / bf')
    }
}

class Watch extends SmartDevice{
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }

}

class Tablet extends SmartDevice{
    constructor(name, price, isWifi){
        super(name, price);
        this.isWifi = isWifi;
    }

}

const samsung = new Phone('Samsung', 50000, '30GB');
console.log(samsung.charging());