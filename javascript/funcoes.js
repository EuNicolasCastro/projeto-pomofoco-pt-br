

let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoAvancar = document.querySelector('#botao-avancar');
let grupoBotoesAvancarZerar = document.querySelector('#botoes-avancar-zerar');
let display = document.querySelector('#tempo');
let botaoCiclo = document.querySelectorAll('.botao-ciclo');
let fundoPrincipal = document.querySelector('.container');



let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervalo,tempoPomodoro, tempoDescansoLongo;
let checarEstudo;
let tempoPausado = true;
let cicloTotaldeEstudo = 4,cicloAtualdeEstudo = 1;

botaoIniciarPausar.addEventListener('click', iniciarPausarContador);
botaoZerar.addEventListener('click', zerarTudo);
botaoAvancar.addEventListener('click', avancarCiclo)

// SETANDO O TEMPO
tempoIntervalo = 3;
tempoPomodoro = 5;
tempoDescansoLongo = 10;
tempoEstudo = tempoPomodoro;



tempoPomodoro = tempoPomodoro <10 ? "0"+ tempoPomodoro : tempoPomodoro;
tempoIntervalo = tempoIntervalo <10 ? "0"+ tempoIntervalo : tempoIntervalo;
tempoDescansoLongo = tempoDescansoLongo <10 ? "0"+ tempoDescansoLongo : tempoDescansoLongo;
 
//Inciando o display do contador

function iniciarPomodoro(){
    clearInterval(intervalo);
    aparecerCSSPrincipal();
    tempoPausado = true;
    checarIntervalo = false;
    tempoEstudo = tempoPomodoro;
    display.textContent = tempoEstudo+":00";
    timer = 60*tempoEstudo;
}

function iniciarIntervalo(){
    clearInterval(intervalo);
    aparecerCSSIntervalo();
    tempoPausado = true;
    checarIntervalo = true;
    (cicloAtualdeEstudo == cicloTotaldeEstudo) ? (tempoEstudo = tempoDescansoLongo) : (tempoEstudo = tempoIntervalo);
    display.textContent = tempoEstudo+":00";
    timer = 60*tempoEstudo;
}
//Iniciando o CSS dos ciclos


//Inciando funcoes

 iniciarPomodoro();


function iniciarPausarContador(){
    
    if (tempoPausado === false) {
        clearInterval(intervalo);
        tempoPausado = true;
    }
    else{
    tempoPausado = false;
    intervalo = setInterval(rodarContador,10);  // Colocando o contador rapido para testes
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

// Função chamada ao apertar o Botão ZERAR

function zerarTudo(){
    //botaoCiclo[cicloTotaldeEstudo-1].removeAttribute('id', 'botao-ciclo-atual');
    cicloAtualdeEstudo = 1;
    iniciarPomodoro();
}

// Função chamada ao apertar o Botão AVANÇAR CICLO

function avancarCiclo(){

    mudarCiclo();
    iniciarPomodoro();


}


function mudarCiclo(){

    cicloAtualdeEstudo +=1;
    verificarUltimoCiclo();

}

// Essa função troca entre o tempo do intervalo e tempo do Pomodoro

function trocarTempo(){

    clearInterval(intervalo);
    
    if(!checarIntervalo){
       iniciarIntervalo(); 
    }else{
        mudarCiclo();
        iniciarPomodoro();
        
    }
    timer = 60*tempoEstudo;
    tempoPausado = true;
    iniciarPausarContador();

}

function verificarUltimoCiclo(){

    alert("Entrou no ciclo n°: " + cicloAtualdeEstudo);
    if(cicloAtualdeEstudo > cicloTotaldeEstudo){
        zerarTudo();
    } 
}





// FUNCOES PARA O CSS


function aparecerCSSIntervalo(){
    
    fundoPrincipal.style.backgroundColor = botaoIniciarPausar.style.color = botaoAvancar.style.color = botaoZerar.style.color = "var(--anil)";
}

function aparecerCSSPrincipal(){
    fundoPrincipal.style.backgroundColor = "var(--salmao-forte)";
    fundoPrincipal.style.backgroundColor = botaoIniciarPausar.style.color = botaoAvancar.style.color = botaoZerar.style.color = "var(--salmao-forte)";
}
