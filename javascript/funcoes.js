

let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoAvancar = document.querySelector('#botao-avancar');
let grupoBotoesAvancarZerar = document.querySelector('#botoes-avancar-zerar');
let display = document.querySelector('#tempo');
let botaoCiclo = document.querySelectorAll('.botao-ciclo');
let fundoPrincipal = document.querySelector('.container');
let aparecerHtmlCiclos = document.querySelector('.ciclos');

// Capturar elementos do SAIBA MAIS

let botaoSaibaMais = document.querySelector('#botao-saiba-mais');
let caixaSaibaMais = document.querySelector('#saiba-mais');
let botaoSairSaibaMais = document.querySelector('#sair-saiba-mais');

let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervalo,tempoPomodoro, tempoDescansoLongo;
let checarEstudo;
let tempoPausado = true;
let cicloTotaldeEstudo = 4,cicloAtualdeEstudo = 1;

botaoIniciarPausar.addEventListener('click', iniciarPausarContador);
botaoZerar.addEventListener('click', zerarTudo);
botaoAvancar.addEventListener('click', avancarCiclo);

botaoSaibaMais.addEventListener('click', aparecerSaibaMais);
botaoSairSaibaMais.addEventListener('click', fecharSaibaMais)

// SETANDO O TEMPO
tempoIntervalo = 3;
tempoPomodoro = 5;
tempoDescansoLongo = 10;
tempoEstudo = tempoPomodoro;



tempoPomodoro = tempoPomodoro <10 ? "0"+ tempoPomodoro : tempoPomodoro;
tempoIntervalo = tempoIntervalo <10 ? "0"+ tempoIntervalo : tempoIntervalo;
tempoDescansoLongo = tempoDescansoLongo <10 ? "0"+ tempoDescansoLongo : tempoDescansoLongo;

// Iniciando o display dos ciclos

// function iniciarDisplayCiclos(){ 
    
//     // função usada para fazer aparecer os ciclos de acordo com o pedido personalizado, Default é 4
//     aparecerHtmlCiclos.innerHTML = "<p>CICLOS</p>";
//     for(i=1; i <= cicloTotaldeEstudo; i++){
//         aparecerHtmlCiclos.innerHTML = "<button class='botao-ciclo'> ${i} </button>";
//     }
    

// }


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

    if(cicloAtualdeEstudo > cicloTotaldeEstudo){
        zerarTudo();
    } 
}





// FUNCOES PARA O CSS


function aparecerCSSIntervalo(){
    
    fundoPrincipal.style.backgroundColor = botaoIniciarPausar.style.color = botaoAvancar.style.color = botaoZerar.style.color = "var(--anil)";
}

function aparecerCSSPrincipal(){

    // Muda a cor do fundo e dos botoes
    fundoPrincipal.style.backgroundColor = botaoIniciarPausar.style.color = botaoAvancar.style.color = botaoZerar.style.color = "var(--salmao-forte)";

    // Muda o estilo dos ciclos
    aparecerCSSCiclo();
}

function aparecerCSSCiclo(){
    if (cicloAtualdeEstudo == 1){
        botaoCiclo[0].style.border = "solid 3px white";
        for (let i = 1; i < cicloTotaldeEstudo; i++) {
            botaoCiclo[i].style.border = "none";
        }
    } else{
        botaoCiclo[cicloAtualdeEstudo-2].style.border = "none";
        botaoCiclo[cicloAtualdeEstudo-1].style.border = "solid 3px white";
    }
}



/* FUNCOES DO SAIBA MAIS */
function aparecerSaibaMais(){
    caixaSaibaMais.style.display = 'flex';
}

function fecharSaibaMais(){
    caixaSaibaMais.style.display = 'none';
}