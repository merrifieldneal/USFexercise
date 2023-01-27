// Neal Merrifield
class Vehicle {
    constructor(make, model, year) { // establish make model year for vehicle
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() { // honk() function
        return "Beep.";
    }
    toString() { // return make model year on a string
        const { make, model, year } = this;
        return `This vehicle is a ${make} ${model} from ${year}`;
    }

}

class Car extends Vehicle {
    constructor(model, make, year) {
        super(model, make, year); // use super for the given values
        this.numWheels = 4; // establish wheels for car
    }
    honk() {
        return "Beep BEEP."; // unique car beep
    }
    toString() { // toString for car says its a CAR
        const { make, model, year } = this;
        return `This car is a ${make} ${model} from ${year}`;
    }

}

class Motorcycle extends Vehicle {
    constructor(model, make, year) {
        super(model, make, year); // use super for the given values
        this.numWheels = 2; // establish wheels for motorcyle
    }
    revEngine() {
        return "VROOM!!!";
    }
    toString() { // toString for motor says its a MOTO
        const { make, model, year } = this;
        return `This motorcycle is a ${make} ${model} from ${year}`;
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = []; // empty garage
        this.capacity = capacity; // load in the capacity
    }
    add(newVehicle) {
        if (this.vehicles.length === this.capacity) {
            throw new Error("Sorry, we're full."); // error check
        }
        this.vehicles.push(newVehicle); // add vehicle to array
    }
}

