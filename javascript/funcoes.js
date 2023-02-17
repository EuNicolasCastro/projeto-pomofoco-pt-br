
let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoPausar = document.querySelector('#botao-avancar');
let display = document.querySelector('#tempo');

let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervaloCurto,tempoIntervaloLongo;
let checarEstudo,checarIntervaloCurto ,checarIntervaloLongo;
let tempoPausado = true;

botaoIniciarPausar.addEventListener('click', iniciarEstudo);
botaoZerar.addEventListener('click', zerarContador);
botaoPausar.addEventListener('click', avancarContador)

tempoEstudo = 10;
tempoIntervaloCurto = 5;
checarEstudo = true;
checarIntervaloCurto = false;
checarIntervaloLongo = false;

display.textContent = tempoEstudo+":00";

function iniciarEstudo(){
    if(checarEstudo === true && checarIntervaloCurto === false && checarIntervaloLongo === false){
        checarEstudo = false;
        checarIntervaloCurto = true;
        timer = 60*tempoEstudo;
        iniciarContador();
    } else {
        checarEstudo = true;
        checarIntervaloCurto = false;
        timer = 60*tempoIntervaloCurto;
        iniciarContador();
    }
}

function iniciarContador(){
    if (tempoPausado === false) {
        clearInterval(intervalo);
        tempoPausado = true;
    }
    else{
    rodarContador();
    tempoPausado = false;
    intervalo = setInterval(rodarContador,10);
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
        iniciarEstudo();
        //display.textContent = "ACABOU" // Aqui será para chamar a proxima funcao de intervalo
        
    }
}

function iniciarIntervaloCurto(){
    timer = 60*tempoIntervaloCurto;
    tempoPausado = true;
    iniciarContador();
}

function zerarContador(){
    clearInterval(intervalo);
    timer = 60*tempoEstudo;
    display.textContent = tempoEstudo+":00";
}

function avancarContador(){
    clearInterval(intervalo);
}