//import alterarCSSCiclo from "./alterarcss.js";


let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoPausar = document.querySelector('#botao-avancar');
let display = document.querySelector('#tempo');
let botaoCicloAtual = document.querySelector('#botao-ciclo1');



let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervaloCurto,tempoIntervaloLongo;
let checarEstudo;
let tempoPausado = true;
let cicloTotaldeEstudo = 4,cicloAtualdeEstudo = 1;

botaoIniciarPausar.addEventListener('click', iniciarPausarContador);
botaoZerar.addEventListener('click', zerarTudo);
botaoPausar.addEventListener('click', avancarContador)

// SETANDO O TEMPO
tempoIntervaloCurto = 3;
tempoIntervaloLongo = 5;
tempoEstudo = tempoIntervaloLongo;


checarIntervalo=false;

tempoIntervaloLongo = tempoIntervaloLongo <10 ? "0"+ tempoIntervaloLongo : tempoIntervaloLongo;
tempoIntervaloCurto = tempoIntervaloCurto <10 ? "0"+ tempoIntervaloCurto : tempoIntervaloCurto;

 
//Inciando o display do contador
tempoEstudo = tempoIntervaloLongo
display.textContent = tempoEstudo+":00";
botaoCicloAtual.classList.add('botao-ciclo-atual')

timer = 60*tempoEstudo;


function iniciarPausarContador(){
    
    if (tempoPausado === false) {
        clearInterval(intervalo);
        tempoPausado = true;
    }
    else{
    tempoPausado = false;
    intervalo = setInterval(rodarContador,10);  // COlocando o contador rapido para testes
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
        trocarTempo();
    }

}

function trocarTempo(){
    
        if(!checarIntervalo){
            tempoEstudo = tempoIntervaloCurto;
            checarIntervalo = true;          
        }else{
            tempoEstudo = tempoIntervaloLongo;
            checarIntervalo = false;
            cicloAtualdeEstudo += 1;
        }
        timer = 60*tempoEstudo;
        zerarContador();
        iniciarPausarContador();

}

function zerarContador(){

    clearInterval(intervalo);
    timer = 60*tempoEstudo;
    tempoPausado = true;
    display.textContent = tempoEstudo + ":00";

}

function avancarContador(){
    
    clearInterval(intervalo);
    cicloAtualdeEstudo +=1;
    tempoEstudo = tempoIntervaloLongo;
    alterarCSSCiclo();
    zerarContador();

}

function zerarTudo(){

    tempoEstudo = tempoIntervaloLongo;
    zerarContador();

}

