

let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoPausar = document.querySelector('#botao-avancar');
let display = document.querySelector('#tempo');
let botaoCiclo = document.querySelectorAll('.botao-ciclo');
let fundoPrincipal = document.querySelector('.bloco-principal');



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

function iniciarDisplayContador(){
tempoEstudo = tempoIntervaloLongo;
display.textContent = tempoEstudo+":00";
timer = 60*tempoEstudo;
}
//Iniciando o CSS dos ciclos


//Inciando funcoes

iniciarDisplayContador();


function iniciarPausarContador(){
    
    alterarCSSCicloAtual();
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
            fundoPrincipal.setAttribute('id','botao-principal-intervalo');        
        }else{
            tempoEstudo = tempoIntervaloLongo;
            checarIntervalo = false;
            mudarCiclo();
        }
        timer = 60*tempoEstudo;
        zerarContador();
        iniciarPausarContador();

}

function mudarCiclo(){

    cicloAtualdeEstudo +=1;

}

function zerarContador(){

    clearInterval(intervalo);
    timer = 60*tempoEstudo;
    
    if (cicloAtualdeEstudo > cicloTotaldeEstudo){
        alert('PARABÉNS, VOCê FINALIZOU SUA TAREFA!');
        zerarTudo();
        tempoPausado = false;
    }else{
        tempoPausado = true;
    }
    display.textContent = tempoEstudo + ":00";
    
}

function avancarContador(){
    
    clearInterval(intervalo);
    mudarCiclo();
    tempoEstudo = tempoIntervaloLongo;
    zerarContador();

}

function zerarTudo(){
    botaoCiclo[cicloAtualdeEstudo-1].removeAttribute('id', 'botao-ciclo-atual');
    cicloAtualdeEstudo = 1;
    tempoEstudo = tempoIntervaloLongo; 
    zerarContador(); 
}

// FUNCOES PARA O CSS

function alterarCSSCicloAtual(){
    botaoCiclo[cicloAtualdeEstudo-1].setAttribute('id', 'botao-ciclo-atual');
    if (cicloAtualdeEstudo > 1){
        botaoCiclo[cicloAtualdeEstudo-2].removeAttribute('id', 'botao-ciclo-atual');
    }

}