
let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoPausar = document.querySelector('#botao-avancar')
let display = document.querySelector('#tempo');

let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervaloCurto,tempoIntervaloLongo;
let pausado = true;

botaoIniciarPausar.addEventListener('click', iniciarContador);
botaoZerar.addEventListener('click', zerarContador);
botaoPausar.addEventListener('click', avancarContador)

tempoEstudo = 25;
timer = 60*tempoEstudo;

display.textContent = tempoEstudo+":00";

function iniciarContador(){
    if (pausado === false) {
        clearInterval(intervalo);
        pausado = true;
    }
    else{
    pausado = false;
    intervalo = setInterval(rodarContador,1000);
    }
}

function rodarContador(){

    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos <10 ? "0"+ segundos : segundos;

    display.textContent = minutos + ":" + segundos;

    if(--timer < 0){
        timer = 0;
        display.textContent = "ACABOU" // Aqui será para chamar a proxima funcao de intervalo
    }
}

function pausarContador(){
}

function zerarContador(){
    clearInterval(intervalo);
    timer = 60*tempoEstudo;
    display.textContent = tempoEstudo+":00";
}

function avancarContador(){
    clearInterval(intervalo);
}