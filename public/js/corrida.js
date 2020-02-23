const SOMA = 2;
const cores = ['VERDE', 'VERMELHO', 'AMARELO', 'AZUL'];
let porcentagem_0 = SOMA;
let porcentagem_1 = SOMA;
let porcentagem_2 = SOMA;
let porcentagem_3 = SOMA;
const divTxtBaixo = document.getElementById('txt-baixo');
const div0 = document.getElementById('c0');
const div1 = document.getElementById('c1');
const div2 = document.getElementById('c2');
const div3 = document.getElementById('c3');
let correndo = false;
let interval;
window.onkeydown = ev => {
    if (ev.code === 'KeyC' && !correndo && !isFim()) {
        iniciarCorrida();
    }
    if (ev.code === 'KeyZ') {
        zerarCorrida();
    }
}

iniciarCorrida = () => {
    correndo = true;
    console.log('teste')
    interval = setInterval(corrida, 50);
}

zerarCorrida = () => {
    porcentagem_1 = SOMA;
    porcentagem_2 = SOMA;
    porcentagem_3 = SOMA;
    porcentagem_0 = SOMA;
    div0.style.width = '2%';
    div1.style.width = '2%';
    div2.style.width = '2%';
    div3.style.width = '2%';
    correndo = false;
    divTxtBaixo.innerHTML = '';
    clearInterval(interval);
}

corrida = () => {
    /**Nos números sorteados, os numeros dos extremos sempre caem 
     * menos vzs, por isso n estao sendo utilizados no switch 0 e 6
     */
    if (correndo) {
        if (isFim()) {
            correndo = false;
            divTxtBaixo.innerHTML += 'Fim da corrida, cor ' + vencedor() + ' venceu!';
        } else {
            movimentacao();
        }

    }

}

movimentacao = () => {
    const numero = Math.round(Math.random() * 6);
    switch (numero) {
        case 4: {
            div0.style.width = porcentagem_0 + '%';
            porcentagem_0 += SOMA;
            break;
        }
        case 1: {
            div1.style.width = porcentagem_1 + '%';
            porcentagem_1 += SOMA;
            break
        }
        case 2: {
            div2.style.width = porcentagem_2 + '%';
            porcentagem_2 += SOMA;
            break
        }
        case 5: {
            div3.style.width = porcentagem_3 + '%';
            porcentagem_3 += SOMA;
            break
        }
    }
}

isFim = () => {
    return porcentagem_0 >= 100 ||
        porcentagem_1 >= 100 ||
        porcentagem_2 >= 100 ||
        porcentagem_3 >= 100;
}

vencedor = () => {
    const maiorValor = Math.max.apply(null, [porcentagem_0, porcentagem_1, porcentagem_2, porcentagem_3]);
    let corVencedora = ''
    switch (maiorValor) {
        case porcentagem_0: {
            corVencedora = cores[0];
            break;
        }
        case porcentagem_1: {
            corVencedora = cores[1];
            break;
        }
        case porcentagem_2: {
            corVencedora = cores[2];
            break;
        }
        case porcentagem_3: {
            corVencedora = cores[3];
            break;
        }
    }
    return corVencedora;
}