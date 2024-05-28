/*
1) Descobrir como detectar os cliques do mouse nos botões.

dica: existe a possibilidade de criar uma função para detectar todos ao mesmo tempo.

2) Descobrir como detectar o pressionamento das teclas equivalentes no teclado

dica: existe a possibilidade de criar uma função para detectar todos as pressinamento ao mesmo tempo.

3) Criar uma função chamada FazerSom e nessa função, usando laço "if/else" ou "swith/case" para verificar se o usuário clicou a letra minúscula (caps lock ativado). Após a verificação, ao clicar o som equivalente a tecla tem que ser acionada.

4) Criar uma função chamada botaoAnimacao para usarmos a estilizxação "pressed" criada para que quando o usúario clicar no botão ele seja estilizado.

*/ 

// Função para detectar cliques de mouse nos botões
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function() {
        fazerSom(this.innerHTML);
        botaoAnimacao(this.innerHTML);
    });
});

// Função para detectar pressionamento de teclas equivalentes no teclado
document.addEventListener('keydown', function(event) {
    const teclaPressionada = event.key.toLowerCase();
    if (/[asdjkl]/.test(teclaPressionada)) {
        fazerSom(teclaPressionada.toUpperCase());
        botaoAnimacao(teclaPressionada.toUpperCase());
    }
});

// Função para fazer o som equivalente à tecla clicada
function fazerSom(tecla) {
    switch (tecla) {
        case 'A':
            var audioA = new Audio("./assets/sounds/leftCrash.mp3");
            audioA.play();
            break;
        case 'S':
            var audioS = new Audio("./assets/sounds/tom1.mp3");
            audioS.play();
            break;
        case 'D':
            var audioD = new Audio("./assets/sounds/snare.mp3");
            audioD.play();
            break;
        case 'J':
            var audioJ = new Audio("./assets/sounds/tom2.mp3");
            audioJ.play();
            break;
        case 'K':
            var audioK = new Audio("./assets/sounds/tom3.mp3");
            audioK.play();
            break;
        case 'L':
            var audioL = new Audio("./assets/sounds/kickbass.mp3");
            audioL.play();
            break;
        default:
            console.log('Tecla inválida');
    }
}

// Função para estilizar o botão ao ser clicado
function botaoAnimacao(tecla) {
    const botao = document.querySelector(`.${tecla.toLowerCase()}`);
    
    // Adiciona a classe de animação
    botao.classList.add('pressed');
    
    // Define um temporizador para remover a classe após um intervalo de tempo
    setTimeout(function() {
        botao.classList.remove('pressed');
    }, 100); // Ajuste o tempo conforme necessário
}
