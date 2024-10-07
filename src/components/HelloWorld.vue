<template>

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
     
    </head>
    <body>
  
      <div class="terminal">
        <div id="output"></div>
        <input type="text" id="input" placeholder="Digite um comando..." autofocus>
        <button id="sendButton">Enviar</button>
    </div>
    
    
    </body>
    </html>
        
    </template>
    
    <script>
     export default {
  props: ['src'],
  data() {
    return {
      loaded: false
    };
  }
}; 
const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = input.value;
        processCommand(command);
        input.value = ''; // Limpa o campo de entrada
    }
});

function processCommand(command) {
    let response;

    switch (command.toLowerCase()) {
        case 'help':
            response = 'Comandos disponíveis:\n' +
                       '1. help - Mostra esta mensagem.\n' +
                       '2. clear - Limpa o terminal.\n' +
                       '3. about - Informações sobre este simulador.';
            break;
        case 'clear':
            output.innerHTML = '';
            return; // Não adiciona nada no output
        case 'about':
            response = 'Este é um simulador de prompt de comando criado como exemplo.';
            break;
        default:
            response = 'Comando desconhecido. Digite "help" para ver a lista de comandos.';
            break;
    }

    output.innerHTML += `> ${command}\n${response}\n\n`;
    scrollToBottom();
}

function scrollToBottom() {
    const terminal = document.querySelector('.terminal');
    terminal.scrollTop = terminal.scrollHeight;
}

    </script>




    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h1{
      color:hwb(153 12% 66%);
    }
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: hwb(153 12% 66%);
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    nav {
        background-color: #189d35;
        padding: 10px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    nav .logo a {
        text-decoration: none;
        color: white;
        font-size: 35px;
        font-weight: 600;
    }
    
    nav ul {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 10px;
    }
    
    nav li {
        margin-left: 7px;
    }
    
    nav li a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        padding: 8px 15px;
        border-radius: 5px;
        transition: 0.3s;
    }
    
    nav li a:hover {
        background-color: white;
        color: black;
    }
    .texto .botoes {
        margin-top: 1px;
    
    }
    
    .texto .botoes button {
        height: 90px;
        width: 170px;
        border-radius: 5px;
        border: 0;
        margin: 0 10px;
        font-size: 20px;
        font-weight: 500;
        padding: 0 10px;
        cursor: pointer;
        outline: none;
        transition: 0.3s;
    }
    
    .texto .botoes button.n-overlay {
        color: white;
        background: none;
        border: 2px solid white;
    }
    
    .texto .botoes button.n-overlay:hover {
        color: black;
        background-color: white;
    }
    
    .texto .botoes button.overlay {
        background: linear-gradient(rgba(30, 105, 0, 0.486),rgba(248, 0, 0, 0.493));
        color: white;
        animation: vibrar 0.5s ease-in-out infinite both;
    }
    
    @keyframes vibrar {
        0% {
            transform: scale(1);
        }
    
        50% {
            transform: scale(1.1);
        }
    
        100% {
            transform: scale(1);
        }
    }
    .pic{
      width: 300px
      
    }
  
    @keyframes vibrar {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.fotos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0; /* Espaçamento entre as fotos e o restante */
}

.image-container {
    display: flex;
    justify-content: space-between;
    margin: 10px; /* Espaçamento entre as linhas de imagens */
}

img {
    margin: 10px; /* Espaçamento entre as imagens */
    border-radius: 8px; /* Estilo opcional */
}
.botoes {
  display: flex;
  justify-content: center; /* Alinha os botões ao centro */
  gap: 20px; /* Define um espaçamento entre os botões */
  margin-top: 20px; /* Adiciona espaço acima dos botões */
}
.skeleton {
  width: 300px;
  height: 200px;
  background: #eee;
}
body {
    background-color: #2b0a4e; /* Cor de fundo roxo escuro */
    color: #e1b7ff; /* Cor do texto lilás */
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    padding: 20px;
}

.terminal {
    border: 2px solid #e1b7ff; /* Bordas lilás */
    padding: 10px;
    height: 400px;
    overflow-y: auto;
    background-color: #3e1f73; /* Cor de fundo do terminal */
    box-shadow: 0 0 15px rgba(225, 183, 255, 0.5); /* Sombra suave */
}

#output {
    white-space: pre-wrap; /* Mantém espaços em branco e quebras de linha */
    margin-bottom: 10px; /* Espaço abaixo do output */
}

.input-container {
    display: flex; /* Usar flexbox para alinhar os elementos */
}

#input {
    background-color: #2b0a4e; /* Fundo do input */
    color: #e1b7ff; /* Cor do texto do input */
    border: none;
    flex: 1; /* Permitir que o input ocupe o espaço restante */
    outline: none;
    padding: 5px;
    font-size: 16px;
    margin-right: 10px; /* Espaço à direita do input */
}

#input::placeholder {
    color: #c0a0e1; /* Cor do placeholder */
}

#sendButton {
    background-color: #add8e6; /* Azul bem clarinho */
    color: #000; /* Texto preto para contraste */
    border: none;
    border-radius: 5px; /* Bordas arredondadas */
    padding: 8px 16px; /* Espaçamento interno */
    font-size: 16px; /* Tamanho da fonte */
    cursor: pointer; /* Muda o cursor ao passar sobre o botão */
}

#sendButton:hover {
    background-color: #b0e0e6; /* Azul um pouco mais escuro ao passar o mouse */
}

#sendButton:active {
    background-color: #87ceeb; /* Azul ainda mais escuro ao clicar */
}

    </style>
    