var readlineSync = require(`readline-sync`);

const MAX_CITOYENS = 200

let isRunning = true
let counter = 0

while (isRunning) {
const prenom = readlineSync.question('Pourrais-je avoir votre prenom? ')
const nom = readlineSync.question('Pourrais-je avoir votre nom? ')
const ageStr = readlineSync.question('Pourrais-je avoir votre âge? ')
const age = Number(ageStr)
if (age >= 18) {
  ++counter
  console.log(`${prenom} ${nom} vous êtes majeur, vous pouvez voter`)
  console.log('')
} else {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
}
if (counter >= MAX_CITOYENS) {
  isRunning = false
}
}
console.log('FIN DU PROGRAMME DE CONTROLE DES VOTES')