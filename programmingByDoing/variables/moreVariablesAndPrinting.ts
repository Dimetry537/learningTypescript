const myName: string = "Zed A. Shaw";
const myAge: number = 35;
const myHeight: number = 74;
const heightInCm: number = myHeight * 2.54;
const myWeight: number = 180;
const weightInKg: number = myWeight / 2.205;
const myEyes: string = "Blue";
const myTeeth: string = "White";
const myHair: string = "Brown";

console.log(`Let's talk about ${myName}.`);
console.log(`He's ${myHeight} (or ${heightInCm} cm) inches tall.`);
console.log(`He's ${myWeight} (or ${weightInKg} kg) pounds heavy.`);
console.log("Actually, that's not too heavy.");
console.log(`He's got ${myEyes} eyes and ${myHair} hair.`);
console.log(`His teeth are usually ${myTeeth} depending on the coffee.`);
console.log(`If I add ${myAge}, ${myHeight}, and ${myWeight}. I get ${myAge + myHeight + myWeight}.`);
