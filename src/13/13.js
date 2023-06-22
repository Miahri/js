//1st example
function foo() {
    const a = () => {
        console.log(this);
    };
    a();
};

foo();

//2nd example
let car = {
    start() {
        console.log(this)
    },
};

const start = car.start;
car = null;

start();

//3rd example
let car1 = {
    color: 'red',
    showColor() {
        console.log(car.color);
    },
};

car.showColor();

//4th example
const superCar = car;
car = null;
superCar.showColor();

//5th example
const scooter = {
    maxSpeed: 60,
};

const car2 = {
    maxSpeed: 200,
    showMaxSpeed() {
        (() => {
            console.log(this.maxSpeed);
        }).call(scooter);
    },
};

car2.showMaxSpeed();

//6th example
const dialer = {
    name: 'Toyota',
    models: ['Yaris', 'Corolla', 'Prado'],
    showModelsInDialer() {
        this.models.forEach(
            function (model) {
                console.log(`Dialers ${this.name}, have: ${model}`);
            }.bind(dialer)
        );
    },
};

dialer.showModelsInDialer();