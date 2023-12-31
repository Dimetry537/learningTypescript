"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const getInput = (question) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};
const yourAge = () => __awaiter(void 0, void 0, void 0, function* () {
    const yourAge = yield getInput('Enter your age: ');
    return yourAge;
});
const yourHeight = () => __awaiter(void 0, void 0, void 0, function* () {
    const yourHeight = yield getInput('Enter your height: ');
    return yourHeight;
});
const yourWeight = () => __awaiter(void 0, void 0, void 0, function* () {
    const yourWeight = yield getInput('Enter your weight: ');
    return yourWeight;
});
const myParams = () => __awaiter(void 0, void 0, void 0, function* () {
    const ageValue = yield yourAge();
    const heightValue = yield yourHeight();
    const weightValue = yield yourWeight();
    return { ageValue, heightValue, weightValue };
});
const askQuestion = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield myParams();
    console.log(`So you're ${result.ageValue} old, ${result.heightValue} tall and ${result.weightValue} heavy.`);
});
askQuestion();
