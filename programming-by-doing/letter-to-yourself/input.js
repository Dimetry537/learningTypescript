"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Введите что-то: ', function (answer) {
    console.log("\u0412\u044B \u0432\u0432\u0435\u043B\u0438: ".concat(answer));
    rl.close();
});
