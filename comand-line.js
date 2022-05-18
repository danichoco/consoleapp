import chalk from "chalk";
import promptFact from "prompt-sync";
const prompt= promptFact();

export function runCommandLine(callBack){
    var command = prompt(chalk.yellow('console app >'));

    while(command != 'exit'){
      callBack(command);
      var command = prompt(chalk.red('console app >'));
    }     
    console.log(chalk.green('good bye'));
}