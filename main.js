function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

// traz todas tags que tem a classe "tecla" destro de uma lista chamada listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// looping que reconhece minhas teclas
while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador + 1;

    //console.log(contador + " " + idAudio);
} 