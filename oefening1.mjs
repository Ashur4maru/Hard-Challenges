import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let aantalDagen = parseFloat(await userInput.question('Geef een aantal dagen: '));
let aantalUren = parseFloat(await userInput.question('Geef een aantal uren: '));
let aantalMinuten = parseFloat(await userInput.question('Geef een aantal minuten: '));
let aantalSeconden = parseFloat(await userInput.question('Geef een aantal seconde: '));

let dagenInSeconde = (((aantalDagen * 24) * 60) * 60);
let urenInSeconde = ((aantalUren * 60) * 60);
let minutenInSeconde = aantalMinuten * 60;



console.log('Aantal seconden: ' + (dagenInSeconde + urenInSeconde + minutenInSeconde + aantalSeconden));

process.exit();

