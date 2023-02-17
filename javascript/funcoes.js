
let botaoIniciarPausar = document.querySelector('#botao-iniciar-pausar');
let botaoZerar = document.querySelector('#botao-zerar');
let botaoPausar = document.querySelector('#botao-avancar')
let display = document.querySelector('#tempo');

let timer,duracao, minutos, segundos,intervalo;
let tempoEstudo,tempoIntervaloCurto,tempoIntervaloLongo;

tempoEstudo =25;
display.textContent = tempoEstudo+":00";
botaoIniciarPausar.addEventListener('click', iniciarContador);
botaoZerar.addEventListener('click', zerarContador);
botaoPausar.addEventListener('click', avancarContador)


function iniciarContador(){
    intervalo = setInterval(rodarContador,1000);
}

function rodarContador(){

   /*  minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos <10 ? "0"+ segundos : segundos;

    display.textContent = minutos + ":" + segundos;

    if(--timer < 0){
        timer = 0;
        display.textContent = "ACABOU" // Aqui será para chamar a proxima funcao de intervalo
    }   */
}

/* let 
    
        setInterval( function (){ 
            
                },1000)
    }*/

function pausarContador(){
}

function zerarContador(){
    console.log('zerou');
}

function avancarContador(){
    console.log('avancou');
}