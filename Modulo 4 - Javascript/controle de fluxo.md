Operadores Booleanos
Os operadores booleanos são usados para comparar valores e retornar um valor booleano (true ou false). Aqui estão os principais operadores booleanos em JavaScript:

Operadores de Comparação:

== : Igual a (compara valores, mas não tipos)
=== : Estritamente igual a (compara valores e tipos)
!= : Diferente de (compara valores, mas não tipos)
!== : Estritamente diferente de (compara valores e tipos)

> : Maior que
> < : Menor que
> = : Maior ou igual a
> <= : Menor ou igual a
> javascript
> Copiar código
> console.log(5 == "5"); // true
> console.log(5 === "5"); // false
> console.log(5 != "5"); // false
> console.log(5 !== "5"); // true
> Operadores Lógicos:

&& : E lógico (retorna true se ambos os operandos forem true)
|| : Ou lógico (retorna true se pelo menos um dos operandos for true)
! : Não lógico (inverte o valor booleano)
javascript
Copiar código
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
Controle de Fluxo
O controle de fluxo permite que você execute diferentes blocos de código com base em condições específicas.

If...Else
A instrução if...else executa um bloco de código se uma condição for verdadeira e, opcionalmente, outro bloco de código se a condição for falsa.

javascript
Copiar código
let idade = 18;

if (idade >= 18) {
console.log("Você é maior de idade.");
} else {
console.log("Você é menor de idade.");
}
Switch...Case
A instrução switch...case é usada para executar um de vários blocos de código com base no valor de uma expressão.

javascript
Copiar código
let dia = 3;
let diaDaSemana;

switch (dia) {
case 1:
diaDaSemana = "Domingo";
break;
case 2:
diaDaSemana = "Segunda-feira";
break;
case 3:
diaDaSemana = "Terça-feira";
break;
case 4:
diaDaSemana = "Quarta-feira";
break;
case 5:
diaDaSemana = "Quinta-feira";
break;
case 6:
diaDaSemana = "Sexta-feira";
break;
case 7:
diaDaSemana = "Sábado";
break;
default:
diaDaSemana = "Dia inválido";
}

console.log(diaDaSemana); // Terça-feira
Operador Ternário
O operador ternário é uma forma compacta de escrever uma instrução if...else. Ele tem a seguinte sintaxe: condição ? expressão1 : expressão2.

javascript
Copiar código
let idade = 20;
let status = (idade >= 18) ? "maior de idade" : "menor de idade";
console.log(status); // maior de idade
Estruturas de Repetição
Estruturas de repetição permitem executar um bloco de código várias vezes.

For
O loop for é usado para repetir um bloco de código um número específico de vezes.

javascript
Copiar código
for (let i = 0; i < 5; i++) {
console.log(i); // 0, 1, 2, 3, 4
}
While
O loop while continua executando um bloco de código enquanto uma condição especificada for verdadeira.

javascript
Copiar código
let i = 0;
while (i < 5) {
console.log(i); // 0, 1, 2, 3, 4
i++;
}
Do...While
O loop do...while executa um bloco de código pelo menos uma vez e então repete a execução enquanto a condição especificada for verdadeira.

javascript
Copiar código
let i = 0;
do {
console.log(i); // 0, 1, 2, 3, 4
i++;
} while (i < 5);
Exemplo Completo
Vamos combinar esses conceitos em um exemplo:

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
        // Operadores Booleanos
        console.log(10 > 5); // true
        console.log(10 < 5); // false

        // Controle de Fluxo - If...Else
        let idade = 18;
        if (idade >= 18) {
            console.log("Você é maior de idade.");
        } else {
            console.log("Você é menor de idade.");
        }

        // Controle de Fluxo - Switch...Case
        let dia = 3;
        let diaDaSemana;
        switch (dia) {
            case 1:
                diaDaSemana = "Domingo";
                break;
            case 2:
                diaDaSemana = "Segunda-feira";
                break;
            case 3:
                diaDaSemana = "Terça-feira";
                break;
            default:
                diaDaSemana = "Outro dia";
        }
        console.log(diaDaSemana); // Terça-feira

        // Operador Ternário
        let status = (idade >= 18) ? "maior de idade" : "menor de idade";
        console.log(status); // maior de idade

        // Estruturas de Repetição - For
        for (let i = 0; i < 5; i++) {
            console.log(i); // 0, 1, 2, 3, 4
        }

        // Estruturas de Repetição - While
        let i = 0;
        while (i < 5) {
            console.log(i); // 0, 1, 2, 3, 4
            i++;
        }

        // Estruturas de Repetição - Do...While
        i = 0;
        do {
            console.log(i); // 0, 1, 2, 3, 4
            i++;
        } while (i < 5);
    </script>

</body>
</html>
Este exemplo abrange operadores booleanos, controle de fluxo com if...else e switch...case, operador ternário, e estruturas de repetição com for, while, e do...while.
