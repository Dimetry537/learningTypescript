import * as readline from 'readline';

let space: string = " ";
let plus: string = "+";
let dash: string = "-";
let line: string = "|";
let hash: string = "#";
let prespace: number = 50;
let postspace: number = 5;
let hashspace: number = 5;
let afterHashSpace: number = 1;

function getInput(question: string): Promise<string> {
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
}

async function fullName() {
    const fullName = await getInput('Enter your name: ');
    return(fullName);
}

async function orgName() {
    const orgName = await getInput('Enter your organization name: ');
    return(orgName);
}

async function orgAddress() {
    const orgAddress = await getInput('Enter your organization address: ');
    return(orgAddress);
}

async function orgLetterInfo() {
    const fullNameValue = await fullName();
    const orgNameValue = await orgName();
    const orgAddressValue = await orgAddress();
    const lengthFullName: number = fullNameValue.length;
    const lengthOrgName: number = orgNameValue.length;
    const lengthOrgAdress: number = orgAddressValue.length;

    const maxLength: number = Math.max(lengthFullName, lengthOrgName, lengthOrgAdress);
    return{fullNameValue, orgNameValue, orgAddressValue, maxLength, lengthFullName, lengthOrgName, lengthOrgAdress};
}

async function letter() {
    const result = await orgLetterInfo();
    const firstEndLine = plus + dash.repeat(prespace + result.maxLength + postspace + hashspace + afterHashSpace) + plus;
    const fullName = line + space.repeat(prespace) + result.fullNameValue + space.repeat(result.maxLength - result.lengthFullName) + space.repeat(postspace + hashspace) + line;
    const orgName = line + space.repeat(prespace) + result.orgNameValue + space.repeat(result.maxLength - result.lengthOrgName) + space.repeat(postspace + hashspace) + line;
    const orgAddress = line + space.repeat(prespace) + result.orgAddressValue + space.repeat(result.maxLength - result.lengthOrgAdress) + space.repeat(postspace + hashspace) + line;
    console.log(firstEndLine);

    for (let i = 0; i < 3; i++) {
        const hashLine = line + space.repeat(prespace + result.maxLength + postspace) + hash.repeat(4) + space.repeat(afterHashSpace) + line;
        console.log(hashLine);
    }

    console.log(fullName);
    console.log(orgName);
    console.log(orgAddress);

    for (let i = 0; i < 6; i++) {
        const freeSpace = line + space.repeat(prespace + result.maxLength + postspace + hashspace) + line;
        console.log(freeSpace);
    }

    console.log(firstEndLine);
}

letter();

