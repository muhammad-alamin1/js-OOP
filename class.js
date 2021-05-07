class PenDriver {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new PenDriver('36GB', 'White', 1300);
console.log(ignite);
const oakwood = new PenDriver('4GB', 'Black');
console.log(oakwood);