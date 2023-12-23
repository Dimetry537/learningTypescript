import * as readline from "readline";

let userInput: string = readline.Interface('Введите что-то: ');
console.log(userInput)

let space: string = " ";
let plus: string = "+";
let dash: string = "-";
let line: string = "|";
let hash: string = "#";

console.log(plus + dash.repeat(98) + plus);
console.log(line + space.repeat(93) + hash.repeat(4) + space + line);
console.log(line + space.repeat(98) + line);
console.log();
