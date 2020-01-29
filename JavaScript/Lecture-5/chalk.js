var chalk= require("chalk");
var figlet=require("figlet");

var log=console.log;
log(chalk.green("I am green"));
log(chalk.yellow("I am yellow"));
log(chalk.blue("I am blue"));
log(chalk.cyan("I am cyan"));
log(chalk.magenta("I am magents"));
log(chalk.red(figlet.textSync("I am red text")));