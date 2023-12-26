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
let space = " ";
let plus = "+";
let dash = "-";
let line = "|";
let hash = "#";
let prespace = 50;
let postspace = 5;
let hashspace = 5;
let afterHashSpace = 1;
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
const fullName = () => __awaiter(void 0, void 0, void 0, function* () {
    const fullName = yield getInput('Enter your name: ');
    return fullName;
});
const orgName = () => __awaiter(void 0, void 0, void 0, function* () {
    const orgName = yield getInput('Enter your organization name: ');
    return orgName;
});
const orgAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    const orgAddress = yield getInput('Enter your organization address: ');
    return orgAddress;
});
const orgLetterInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const fullNameValue = yield fullName();
    const orgNameValue = yield orgName();
    const orgAddressValue = yield orgAddress();
    const lengthFullName = fullNameValue.length;
    const lengthOrgName = orgNameValue.length;
    const lengthOrgAdress = orgAddressValue.length;
    const maxLength = Math.max(lengthFullName, lengthOrgName, lengthOrgAdress);
    return { fullNameValue, orgNameValue, orgAddressValue, maxLength, lengthFullName, lengthOrgName, lengthOrgAdress };
});
const letter = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orgLetterInfo();
    const firstEndLine = plus + dash.repeat(prespace + result.maxLength + postspace + hashspace + afterHashSpace) + plus;
    const fullNameLine = line + space.repeat(prespace) + result.fullNameValue + space.repeat(result.maxLength - result.lengthFullName) + space.repeat(postspace + hashspace) + line;
    const orgNameLine = line + space.repeat(prespace) + result.orgNameValue + space.repeat(result.maxLength - result.lengthOrgName) + space.repeat(postspace + hashspace) + line;
    const orgAddressLine = line + space.repeat(prespace) + result.orgAddressValue + space.repeat(result.maxLength - result.lengthOrgAdress) + space.repeat(postspace + hashspace) + line;
    console.log(firstEndLine);
    for (let i = 0; i < 3; i++) {
        const hashLine = line + space.repeat(prespace + result.maxLength + postspace) + hash.repeat(4) + space.repeat(afterHashSpace) + line;
        console.log(hashLine);
    }
    console.log(fullNameLine);
    console.log(orgNameLine);
    console.log(orgAddressLine);
    for (let i = 0; i < 6; i++) {
        const freeSpace = line + space.repeat(prespace + result.maxLength + postspace + hashspace) + line;
        console.log(freeSpace);
    }
    console.log(firstEndLine);
});
letter();
