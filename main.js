const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

while (i < listaDeTeclas.length) {
  const tecla = listaDeTeclas[i];
  const som = tecla.classList[1];
  const idAudio = `#som_${som}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }
  i += 1;
}
