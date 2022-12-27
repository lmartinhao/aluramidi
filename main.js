const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

for (let index = 0; index < listaDeTeclas.length; index++) {
  const tecla = listaDeTeclas[index];
  const som = tecla.classList[1];
  const idAudio = `#som_${som}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    console.log(evento.code)
    if (evento.code === 'Enter' || evento.code === 'Space') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
