
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
botaoZerar.addEventListener('click', zerarContador);
botaoPausar.addEventListener('click', avancarContador)

// SETANDO O TEMPO
tempoIntervaloCurto = 5;
tempoIntervaloLongo = 20;
tempoEstudo = tempoIntervaloLongo;


checarIntervalo=false;

tempoIntervaloLongo = tempoIntervaloLongo <10 ? "0"+ tempoIntervaloLongo : tempoIntervaloLongo;
tempoIntervaloCurto = tempoIntervaloCurto <10 ? "0"+ tempoIntervaloCurto : tempoIntervaloCurto;

 
//Inciando o display do contador
tempoEstudo = tempoIntervaloLongo
display.textContent = tempoEstudo+":00";
botaoCicloAtual.classList.add('botao-ciclo-atual')

timer = 60*tempoEstudo;
/* function iniciarEstudo(){ 

        if(tempo === true){
            checarEstudo = false;
            timer = 60*tempoEstudo;
            iniciarContador();
        } else {
            checarEstudo = true;
            timer = 60*tempoIntervaloCurto;
            iniciarContador();
        }
      
} */

function iniciarPausarContador(){
    
    if (tempoPausado === false) {
        clearInterval(intervalo);
        tempoPausado = true;
    }
    else{
    tempoPausado = false;
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
        }
        timer = 60*tempoEstudo;
        zerarContador();
        iniciarPausarContador();
       // display.textContent = tempoIntervaloCurto+":00";  // Aqui será para chamar a proxima funcao de intervalo 
}


function iniciarIntervaloCurto(){
    timer = 60*tempoIntervaloCurto;
    tempoPausado = true;
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
    alert(cicloAtualdeEstudo)
    zerarContador();
}