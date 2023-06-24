//1st example
class Car {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }
    showMaxSpeed() {
        console.log(`${this.brand} have max speed: ${this.maxSpeed}`);
    }
}

const bmw = new Car('BMW', 220);
const toyota = new Car('Toyota', 200);
const opel = new Car('Opel', 100);

//2nd example
class Car1 {
    #brand;
    constructor(brand, maxSpeed) {
        this.#brand = brand;
        this.maxSpeed = maxSpeed;
    }
    showMaxSpeed() {
        console.log(`${this.#brand} have max speed: ${this.maxSpeed}`);
    }
    setBrand(newBrand) {
        if(!newBrand) throw new Error('bad brand');
        this.#brand = newBrand;
    }
    getBrand() {
        return this.#brand;
    }
    set brand(newBrand) {
        if(!newBrand) throw new Error('bad brand');
        this.#brand = newBrand;
    }
    get brand() {
        return this.#brand;
    }
}

const bmW = new Car1('BMW', 220);