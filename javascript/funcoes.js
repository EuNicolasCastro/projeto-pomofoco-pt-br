
let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoPausar = document.querySelector('#botao-avancar');
let display = document.querySelector('#tempo');
let botaoCicloAtual = document.querySelector('botao-ciclo1');

let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervaloCurto,tempoIntervaloLongo;
let checarEstudo;
let tempoPausado = true;
let cicloTotaldeEstudo = 4,cicloAtualdeEstudo = 0;

botaoIniciarPausar.addEventListener('click', iniciarEstudo);
botaoZerar.addEventListener('click', zerarContador);
botaoPausar.addEventListener('click', avancarContador)

tempoEstudo = 10;
tempoIntervaloCurto = 5;
tempoIntervaloLongo = 20;
checarEstudo = true;

display.textContent = tempoEstudo+":00";
botaoCicloAtual.classList.add('.botao-ciclo-atual')

function iniciarEstudo(){
    if (cicloAtualdeEstudo === cicloTotaldeEstudo) {
        timer = 60*tempoIntervaloLongo;
        iniciarContador();
        cicloAtualdeEstudo = 0;
    } else{
        cicloAtualdeEstudo++;
        if(checarEstudo === true){
            checarEstudo = false;
            timer = 60*tempoEstudo;
            iniciarContador();
        } else {
            checarEstudo = true;
            timer = 60*tempoIntervaloCurto;
            iniciarContador();
        }
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