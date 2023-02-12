function comecarContador(duracao, display){

    var timer = duracao, minutos, segundos;

    setInterval( function (){
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);
    
        minutos = minutos < 10 ? "0" + minutos : minutos;
    
        display.textContent = minutos + ":" + segundos;
    
        if(--timer < 0){
            timer = duracao;
        }
        
        	},1000)
    }


window.onload = function(){
    var duracao = 60*2;
    var display = document.querySelector('#tempo');

    comecarContador(duracao, display);
}