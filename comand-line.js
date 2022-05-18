import chalk from 'chalk';
import promptFact from 'prompt-sync';
const prompt = promptFact();

export function runCommandLine(callBack){
    var command = prompt(chalk.gray('console app >'));
  
    while (command != 'exit'){
      callBack(command);
        var command = prompt(chalk.green('console app >'));
    }
    console.log(chalk.blue.red('good bye'));
    
}

