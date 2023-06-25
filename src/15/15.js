//__proto__ | prototype
class Car {
    constructor(brand) {
        this.brand = brand;
        this.state = {};
    }
    engine() {
        console.log(`Start ${this.brand}`);
    }
    stop = () => {
        console.log(`Stop ${this.brand}`);
    }
}

const car1 = new Car('bmw');
const car2 = new Car('opel');

console.log('1', car1.__proto__ === car2.__proto__);
console.log('2', car1.brand === car2.brand);
console.log('3', car1.state === car2.state);
console.log('car1', car1);
console.log('car2', car2);
console.log('4', car1.engine === car2.engine);
console.log('5', car1.stop === car2.stop);

function SuperCar (brand) {
    this.brand = brand
}

SuperCar.prototype.engine = function() {
    console.log(`Start ${this.brand}`);
}

let superCar1 = new SuperCar('bmw');
let superCar2 = new SuperCar('bmw');
let superCar3 = new SuperCar('bmw');
