import chalk from "chalk";
import { runCommandLine } from "./comand-line.js";
import promptFact from 'prompt-sync';

const prompt= promptFact();
var products=[];

runCommandLine(function (command) {
if(command == 'add'){
    var productName= prompt(chalk.blue('Especifique el producto: '));
    products.push(productName);
}
else if(command == 'show'){
    for( productName of products){
        console.log(productName);
    }
}
 else{
    console.log(chalk.green('comando  ' +command +    '  invalido  '))
};
});