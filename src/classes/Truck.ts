import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class that extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  towingCapacity: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the parent class (Vehicle) constructor
    super(vin, color, make, model, year, weight, topSpeed);

    // Initialize Truck-specific properties
    this.towingCapacity = towingCapacity;
    this.wheels =
      wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Tow another vehicle
  tow(vehicle: Vehicle): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(
        `Truck ${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}.`
      );
    } else {
      console.log(
        `${vehicle.make} ${vehicle.model} is too heavy to tow. Max capacity: ${this.towingCapacity} lbs.`
      );
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

// Export the Truck class
export default Truck;