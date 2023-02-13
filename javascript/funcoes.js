function comecarContador(duracao, display){

    var timer = duracao, minutos, segundos;

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


window.onload = function(){
    var duracao = 10;
    var display = document.querySelector('#tempo');

    comecarContador(duracao, display);
}