var chalk = require('chalk')
var readlineSync = require(`readline-sync`)

const secretNumber = 54

let isRunning = true
let counter = 0

while (isRunning) {
  const Initial = readlineSync.question('A quel chiffre ou nombre pensez-vous? ')

  const Try = Number(Initial)
  if (Try > secretNumber) {
    ++counter
    console.log(chalk.red(`Nombre trop grand`))
  } 

  else if (Try < secretNumber) {
    console.log(chalk.red(`Nombre trop petit`))
  }
  if (Try === secretNumber) {
    isRunning = false
  }
}
console.log(chalk.green(`Bravo!`))