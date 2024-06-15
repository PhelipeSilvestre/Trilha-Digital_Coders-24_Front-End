Diferenças entre Node.js e JavaScript
Embora o termo "JavaScript" se refira à linguagem de programação em si, "Node.js" refere-se a um ambiente de execução que permite executar código JavaScript fora de um navegador. Vamos explorar as principais diferenças entre eles.

JavaScript
JavaScript é uma linguagem de programação que foi inicialmente desenvolvida para adicionar interatividade às páginas web. Ela é amplamente utilizada no desenvolvimento front-end.

Características do JavaScript:
Execução no Navegador: Tradicionalmente, o JavaScript é executado no contexto de um navegador web. Ele pode manipular a árvore DOM (Document Object Model) para alterar a interface de usuário dinamicamente.

Uso Principal: Adicionar interatividade, validar formulários, animar elementos, manipular eventos, e fazer requisições assíncronas (AJAX) para atualizar a página sem recarregar.

Acesso Limitado ao Sistema: No navegador, o JavaScript tem acesso limitado ao sistema de arquivos e a outras funcionalidades do sistema operacional por motivos de segurança.

APIs do Navegador: JavaScript, quando executado no navegador, pode usar APIs específicas como document, window, localStorage, sessionStorage, etc.

Exemplo de Código JavaScript no Navegador:

html
Copiar código

<html>
<head>
    <title>Exemplo JavaScript</title>
</head>
<body>
    <h1 id="titulo">Olá, mundo!</h1>
    <script>
        document.getElementById("titulo").innerText = "Olá, JavaScript!";
    </script>
</body>
</html>
Node.js
Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Ele permite que desenvolvedores utilizem JavaScript no lado do servidor para criar aplicações escaláveis e de alta performance.

Características do Node.js:
Execução no Servidor: Node.js permite a execução de código JavaScript no lado do servidor, fora do navegador.

Uso Principal: Construção de servidores web, APIs, aplicações em tempo real (como chats), manipulação de arquivos, automação de tarefas, e muito mais.

Acesso ao Sistema: Node.js oferece acesso total ao sistema de arquivos, redes, processos, e outras funcionalidades do sistema operacional, algo que o JavaScript no navegador não pode fazer.

APIs do Node.js: Node.js inclui módulos internos (como fs, http, path, etc.) que permitem interações avançadas com o sistema operacional.

Gerenciamento de Pacotes com npm: Node.js usa o npm (Node Package Manager) para gerenciar pacotes e dependências, facilitando o desenvolvimento com bibliotecas de terceiros.

Exemplo de Código Node.js:

javascript
Copiar código
// server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Olá, Node.js!\n');
});

server.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
Principais Diferenças:
Ambiente de Execução:

JavaScript: Tradicionalmente executado no navegador.
Node.js: Executado no servidor.
API e Módulos:

JavaScript: Acesso a APIs do navegador (DOM, eventos do navegador, etc.).
Node.js: Acesso a APIs do Node.js (sistema de arquivos, rede, processos, etc.).
Acesso ao Sistema:

JavaScript: Acesso limitado ao sistema de arquivos e recursos do sistema operacional.
Node.js: Acesso completo ao sistema de arquivos e recursos do sistema operacional.
Objetivo e Uso:

JavaScript: Principalmente para interatividade e manipulação do DOM no front-end.
Node.js: Principalmente para construção de servidores, APIs e aplicações backend.
Gerenciamento de Pacotes:

JavaScript: Usa bibliotecas e frameworks específicos para front-end (React, Angular, etc.).
Node.js: Usa npm para gerenciar pacotes e módulos.
Conclusão
JavaScript é a linguagem de programação em si, usada tanto no front-end quanto no back-end. Node.js, por outro lado, é um ambiente de execução que permite que JavaScript seja usado no lado do servidor, proporcionando acesso completo a funcionalidades do sistema operacional e possibilitando a criação de servidores e aplicações backend robustas.
