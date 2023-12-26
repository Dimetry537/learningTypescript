const cars: number = 100;
const space_in_a_car: number = 4;
const drivers: number = 30;
const passengers: number = 90;
const cars_not_driven = cars - drivers;
const cars_driven = drivers;
const carpool_capacity = cars_driven * space_in_a_car;
const average_passengers_per_car = passengers / cars_driven;

console.log("There are " + cars + " cars available.");
console.log("There are only " + drivers + " drivers available.");
console.log("There will be " + cars_not_driven + " empty cars today.");
console.log("We can transport " + carpool_capacity + " people today.");
console.log("We have " + passengers + " to carpool today.");
console.log("We need to put about " + average_passengers_per_car + " in each car.");