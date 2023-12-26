import * as readline from 'readline';

const getInput = (question: string): Promise<string> => {
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

const yourAge = async (): Promise<string> => {
    const yourAge = await getInput('Enter your age: ');
    return yourAge;
};

const yourHeight = async (): Promise<string> => {
    const yourHeight = await getInput('Enter your height: ');
    return yourHeight;
};
  
const yourWeight = async (): Promise<string> => {
    const yourWeight = await getInput('Enter your weight: ');
    return yourWeight;
};

const myParams = async (): Promise<any> => {
    const ageValue = await yourAge();
    const heightValue = await yourHeight();
    const weightValue = await yourWeight();

    return{ageValue, heightValue, weightValue}
};

const askQuestion = async (): Promise<void> => {
    const result = await myParams();
    console.log(`So you're ${result.ageValue} old, ${result.heightValue} tall and ${result.weightValue} heavy.`);
};

askQuestion()