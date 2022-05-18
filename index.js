import { runCommandLine } from "./comand-line.js";
import promptFact from 'prompt-sync';
import chalk from "chalk";
  
const prompt = promptFact();
var products= [];

runCommandLine(function (command) {
 if( command == 'add') {
     var productName= prompt(chalk.red.yellow('Especifique el producto: '));
     products.push(productName);
 }
 else if(command == 'show'){
     for( productName of products){
         console.log(chalk.gray.bgYellowBright(productName));
     }
 }
 else{
     console.log(chalk.bgCyan.blue('command ' +command+ 'invalido'))
 };
});
