Introdução ao JavaScript
JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. Ela permite adicionar interatividade às páginas web, manipular o DOM, realizar operações assíncronas e muito mais.

Variáveis
Em JavaScript, variáveis são usadas para armazenar dados. Existem três palavras-chave principais para declarar variáveis: var, let, e const.

var: Escopo de função ou global.
let: Escopo de bloco (mais recomendada para uso atual).
const: Escopo de bloco e não pode ser reatribuída.
javascript
Copiar código
var nome = "João"; // Escopo de função ou global
let idade = 25; // Escopo de bloco
const pi = 3.14; // Valor constante, escopo de bloco
Hoisting
Hoisting é o comportamento do JavaScript de mover declarações de variáveis e funções para o topo de seu contexto de execução. No entanto, apenas as declarações são içadas, não as inicializações.

javascript
Copiar código
console.log(a); // undefined
var a = 5;

hoistedFunction(); // Funciona
function hoistedFunction() {
console.log("Esta função é içada!");
}
Coerção de Tipos
Coerção de tipos refere-se à conversão automática ou implícita de valores de um tipo para outro (como strings para números). A coerção pode ser explícita ou implícita.

Coerção implícita: Ocorre automaticamente.

javascript
Copiar código
let x = 5 + "5"; // "55"
let y = "5" - 2; // 3
Coerção explícita: Feita manualmente usando funções.

javascript
Copiar código
let a = Number("5"); // 5
let b = String(10); // "10"
let c = Boolean(0); // false
Operadores Matemáticos
JavaScript suporta operadores aritméticos básicos, bem como operadores incrementais e decrementais.

Operadores básicos: +, -, \*, /, %

javascript
Copiar código
let sum = 10 + 5; // 15
let diff = 10 - 5; // 5
let product = 10 \* 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
Incremento e decremento: ++, --

javascript
Copiar código
let x = 5;
x++; // 6
x--; // 5
Entrada de Dados
A entrada de dados pode ser realizada usando a função prompt, que exibe uma caixa de diálogo com um campo de entrada de texto.

javascript
Copiar código
let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "!");
Arrays
Arrays são usados para armazenar múltiplos valores em uma única variável. Eles são objetos que têm métodos e propriedades específicas para manipulação.

Declaração e inicialização:

javascript
Copiar código
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "dois", true, null];
Acessando elementos:

javascript
Copiar código
console.log(numeros[0]); // 1
Métodos comuns de array:

push: Adiciona um ou mais elementos ao final do array.
javascript
Copiar código
numeros.push(6);
pop: Remove o último elemento do array.
javascript
Copiar código
numeros.pop();
shift: Remove o primeiro elemento do array.
javascript
Copiar código
numeros.shift();
unshift: Adiciona um ou mais elementos ao início do array.
javascript
Copiar código
numeros.unshift(0);
length: Retorna o número de elementos no array.
javascript
Copiar código
console.log(numeros.length); // 6
forEach: Executa uma função para cada elemento do array.
javascript
Copiar código
numeros.forEach(function(numero) {
console.log(numero);
});
map: Cria um novo array com os resultados de chamar uma função para cada elemento.
javascript
Copiar código
let quadrados = numeros.map(function(numero) {
return numero \* numero;
});
filter: Cria um novo array com todos os elementos que passam em um teste.
javascript
Copiar código
let pares = numeros.filter(function(numero) {
return numero % 2 === 0;
});
Exemplo Completo
Vamos combinar esses conceitos em um exemplo completo:

html
Copiar código

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de JavaScript</title>
</head>
<body>
    <h1>Exemplo de JavaScript</h1>
    <script>
        // Declaração de variáveis
        let nome = prompt("Qual é o seu nome?");
        let idade = 25;
        const pi = 3.14;

        // Operadores matemáticos
        let soma = idade + 5;
        console.log("A soma da sua idade com 5 é: " + soma);

        // Array
        let numeros = [1, 2, 3, 4, 5];
        numeros.push(6);
        numeros.forEach(function(numero) {
            console.log(numero);
        });

        // Função içada
        hoistedFunction();
        function hoistedFunction() {
            console.log("Esta função é içada!");
        }

        // Coerção de tipos
        let x = "5" - 2; // 3
        console.log("Resultado da coerção implícita: " + x);

        // Exibindo uma mensagem final
        console.log("Olá, " + nome + "! Bem-vindo ao exemplo de JavaScript.");
    </script>

</body>
</html>
Este exemplo cobre a declaração de variáveis, operadores matemáticos, manipulação de arrays, entrada de dados, e demonstração de coerção de tipos e hoisting em JavaScript.
