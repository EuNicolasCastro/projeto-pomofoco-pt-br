function comecarContador(duracao, display){

    var timer = duracao, minutos, segundos;

    setInterval(decrescerContador(),1000)
}

function decrescerContador (){
    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;

    display.textContent = minutos + ":" + segundos;

    if(--timer < 0){
        timer = duracao;
    }
}