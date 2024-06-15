const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual é a sua idade? '));

if (idade >= 18) {
    console.log('Você é maior de idade');

} else {
    console.log('Você é menor de idade');
}


// Exemplo operador ternário	
const nota = Number(prompt.question('Qual é a sua nota? '));

nota >= 7 ? console.log('Aprovado') : console.log('Reprovado');