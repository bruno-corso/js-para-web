function tocaSom (seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        console.log('Elemento nulo:' + elemento.localName);
    }
    else{
        elemento.play();
    }
}

// traz todas tags que tem a classe "tecla" destro de uma lista chamada listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');



// looping que reconhece minhas teclas
for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        
        if(evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
 
    }

    tecla.onkeyup = function (evento) {
        console.log(evento.code)
        if(evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.remove('ativa');
        }
 
    }

    //console.log(contador + " " + idAudio);
} 
