
let botaoIniciarPausar = document.querySelector("#botao-iniciar-pausar");
let botaoZerar = document.querySelector("#botao-zerar");
let display = document.querySelector('#tempo');

display.textContent = "25:00"
let iniciou = false;
botaoIniciarPausar.addEventListener("click", iniciarContador);
botaoZerar.addEventListener("click", zerarContador);


function iniciarContador(){
    var duracao = 60*24 + 59;
    iniciou=true;
    rodarContador(duracao, display);
}

function rodarContador(duracao, display){

    let timer = duracao, minutos, segundos;
    while (iniciou) {
        setInterval( function (){
            
                minutos = parseInt(timer / 60, 10);
                segundos = parseInt(timer % 60, 10);
            
                minutos = minutos < 10 ? "0" + minutos : minutos;
                segundos = segundos <10 ? "0"+ segundos : segundos;
            
                display.textContent = minutos + ":" + segundos;

                if(--timer < 0){
                    timer = 0;
                    display.textContent = "ACABOU"
                }   
            
                },1000)
        }
    }


function pausarContador(timer){
   display.textContent = timer;
}

function zerarContador(){
    iniciou = false;
    display.textContent = "25:00"
}

function checarIniciou(){
    
}