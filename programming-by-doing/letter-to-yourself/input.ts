import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите что-то: ', (answer) => {
  console.log(`Вы ввели: ${answer}`);
  rl.close();
});

